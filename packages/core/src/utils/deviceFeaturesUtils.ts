import semver from 'semver';
import { isNaN } from 'lodash';
import { ERRORS, HardwareErrorCode } from '@chargerwallet/hd-shared';
import { toHardened } from '../api/helpers/pathUtils';
import { DeviceCommands } from '../device/DeviceCommands';
import type { Features, SupportFeatureType } from '../types';
import { DeviceModelToTypes, DeviceTypeToModels } from '../types';
import DataManager, { FirmwareField, MessageVersion } from '../data-manager/DataManager';
import { PROTOBUF_MESSAGE_CONFIG } from '../data-manager/MessagesConfig';
import { Device } from '../device/Device';
import { getDeviceType } from './deviceInfoUtils';
import { getDeviceFirmwareVersion } from './deviceVersionUtils';

export const getSupportMessageVersion = (
  features: Features | undefined
): { messages: JSON; messageVersion: MessageVersion } => {
  if (!features)
    return {
      messages: DataManager.messages.latest,
      messageVersion: 'latest',
    };

  const currentDeviceVersion = getDeviceFirmwareVersion(features).join('.');
  const deviceType = getDeviceType(features);

  const deviceVersionConfigs =
    PROTOBUF_MESSAGE_CONFIG[deviceType] ||
    (DeviceTypeToModels[deviceType] &&
      DeviceTypeToModels[deviceType]
        .map(model => PROTOBUF_MESSAGE_CONFIG[model])
        .find(range => range !== undefined));

  const sortedDeviceVersionConfigs =
    deviceVersionConfigs?.comrt((a, b) => semver.compare(b.minVersion, a.minVersion)) ?? [];

  for (const { minVersion, messageVersion } of sortedDeviceVersionConfigs) {
    if (semver.gte(currentDeviceVersion, minVersion)) {
      return {
        messages: DataManager.messages[messageVersion],
        messageVersion,
      };
    }
  }

  return {
    messages: DataManager.messages.latest,
    messageVersion: 'latest',
  };
};

export const supportInputPinOnSoftware = (features: Features): SupportFeatureType => {
  if (!features) return { support: false };

  const deviceType = getDeviceType(features);
  if (deviceType === 'touch' || deviceType === 'pro') {
    return { support: false };
  }

  const currentVersion = getDeviceFirmwareVersion(features).join('.');
  return { support: semver.gte(currentVersion, '2.3.0'), require: '2.3.0' };
};

export const supportNewPassphrase = (features?: Features): SupportFeatureType => {
  if (!features) return { support: false };

  const deviceType = getDeviceType(features);
  if (deviceType === 'touch' || deviceType === 'pro') {
    return { support: true };
  }

  const currentVersion = getDeviceFirmwareVersion(features).join('.');

  return { support: semver.gte(currentVersion, '2.4.0'), require: '2.4.0' };
};

export const getPassphraseStateWithRefreshDeviceInfo = async (device: Device) => {
  const { features, commands } = device;
  const locked = features?.unlocked === false;

  const passphraseState = await getPassphraseState(features, commands);
  const isModeT = getDeviceType(features) === 'touch' || getDeviceType(features) === 'pro';

  // 如果可以获取到 passphraseState，但是设备 features 显示设备未开启 passphrase，需要刷新设备状态
  // if passphraseState can be obtained, but the device features show that the device has not enabled passphrase, the device status needs to be refreshed
  const needRefreshWithPassphrase = passphraseState && features?.passphrase_protection !== true;
  // 如果 Touch/Pro 在之前是锁定状态，刷新设备状态
  // if Touch/Pro was locked before, refresh the device state
  const needRefreshWithLocked = isModeT && locked;

  if (needRefreshWithLocked || needRefreshWithPassphrase) {
    // refresh device state
    await device.getFeatures();
  }

  return passphraseState;
};

export const getPassphraseState = async (
  features: Features | undefined,
  commands: DeviceCommands
) => {
  if (!features) return false;
  const { message, type } = await commands.typedCall('GetAddress', 'Address', {
    address_n: [toHardened(44), toHardened(1), toHardened(0), 0, 0],
    coin_name: 'Testnet',
    script_type: 'SPENDADDRESS',
    show_display: false,
  });

  // @ts-expect-error
  if (type === 'CallMethodError') {
    throw ERRORS.TypedError(HardwareErrorCode.RuntimeError, 'Get the passphrase state error');
  }

  return message.address;
};

export const supportBatchPublicKey = (features?: Features): boolean => {
  if (!features) return false;
  const currentVersion = getDeviceFirmwareVersion(features).join('.');

  const deviceType = getDeviceType(features);
  if (deviceType === 'touch' || deviceType === 'pro') {
    return semver.gte(currentVersion, '3.1.0');
  }

  return semver.gte(currentVersion, '2.6.0');
};

export const supportModifyHomescreen = (features?: Features): SupportFeatureType => {
  if (!features) return { support: false };
  const currentVersion = getDeviceFirmwareVersion(features).join('.');

  const deviceType = getDeviceType(features);
  if (DeviceModelToTypes.model_mini.includes(deviceType)) {
    return { support: true };
  }

  return { support: semver.gte(currentVersion, '3.4.0') };
};

/**
 *  Since 3.5.0, Touch uses the firmware-v3 field to get firmware release info
 */
export const getFirmwareUpdateField = ({
  features,
  updateType,
  targetVersion,
}: {
  features: Features;
  updateType: 'firmware' | 'ble';
  targetVersion?: string;
}): 'ble' | FirmwareField => {
  const deviceType = getDeviceType(features);
  const deviceFirmwareVersion = getDeviceFirmwareVersion(features);
  if (updateType === 'ble') {
    return 'ble';
  }

  if (DeviceModelToTypes.model_mini.includes(deviceType)) {
    return 'firmware-v5';
  }

  if (deviceType === 'touch') {
    if (targetVersion) {
      if (semver.eq(targetVersion, '4.0.0')) return 'firmware-v2';
      if (semver.gt(targetVersion, '4.0.0')) return 'firmware-v5';
    }

    if (semver.lt(deviceFirmwareVersion.join('.'), '3.4.0')) return 'firmware';

    return 'firmware-v5';
  }
  if (deviceType === 'pro') {
    return 'firmware-v5';
  }
  return 'firmware';
};

export function fixVersion(version: string) {
  let parts = version.split('.');

  while (parts.length < 3) {
    parts.push('0');
  }
  parts = parts.map(part => (isNaN(parseInt(part, 10)) ? '0' : part));

  return parts.join('.');
}

export const fixFeaturesFirmwareVersion = (features: Features): Features => {
  // 修复 Touch、Pro 设备 bootloader 低于 2.5.2 版本时，返回的 features 中没有 firmware_version 错误的问题
  // fix Touch、Pro device when bootloader version is lower than 2.5.2, the features returned do not have firmware_version error
  const tempFeatures = { ...features };

  if (tempFeatures.chargerwallet_firmware_version && !semver.valid(tempFeatures.chargerwallet_firmware_version)) {
    tempFeatures.chargerwallet_firmware_version = fixVersion(tempFeatures.chargerwallet_firmware_version);
  }

  if (tempFeatures.chargerwallet_version && !semver.valid(tempFeatures.chargerwallet_version)) {
    tempFeatures.chargerwallet_version = fixVersion(tempFeatures.chargerwallet_version);
  }

  return tempFeatures;
};
