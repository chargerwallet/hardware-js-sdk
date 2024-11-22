import { isEmpty } from 'lodash';
import { DeviceModelToTypes } from '../types';

import type { Features, IDeviceModel, IDeviceType, IVersionRange } from '../types';

/**
 * get device type by features
 */
export const getDeviceType = (features?: Features): IDeviceType => {
  if (!features || typeof features !== 'object') {
    return 'unknown';
  }

  // classic1s 3.5.0 pro 4.6.0
  switch (features.chargerwallet_device_type) {
    case 'CLASSIC':
      return 'classic';
    case 'CLASSIC1S':
      return 'classic1s';
    case 'MINI':
      return 'mini';
    case 'TOUCH':
      return 'touch';
    case 'PRO':
      return 'pro';
    default:
      // future And old device chargerwallet_device_type is empty
      if (!isEmpty(features.chargerwallet_serial_no)) {
        return 'unknown';
      }
    // old device type
  }

  // low version hardware
  // chargerwallet_serial_no > chargerwallet_serial > serial_no
  const serialNo = getDeviceUUID(features);

  // not exist serialNo, bootloader mode, model 1 is classic
  if (isEmpty(serialNo) && features.bootloader_mode === true && features.model === '1') {
    return 'classic';
  }

  if (isEmpty(serialNo)) return 'unknown';

  const miniFlag = serialNo.slice(0, 2);
  // By May 2021, the miniFlag is 'bixin' for all classic devices
  if (miniFlag.toLowerCase() === 'bi') return 'classic';
  if (miniFlag.toLowerCase() === 'cl') return 'classic';
  if (miniFlag.toLowerCase() === 'mi') return 'mini';
  if (miniFlag.toLowerCase() === 'tc') return 'touch';
  if (miniFlag.toLowerCase() === 'pr') return 'pro';

  // unknown device
  return 'unknown';
};

/**
 * get device type by ble name
 * @param name Ble name
 */
export const getDeviceTypeByBleName = (name?: string): IDeviceType => {
  if (!name) return 'unknown';

  if (name.startsWith('BixinKey')) return 'classic';
  if (name.startsWith('K')) return 'classic';

  if (name.startsWith('T')) return 'touch';
  if (name.startsWith('Touch')) return 'touch';

  if (name.startsWith('Pro')) return 'pro';

  return 'unknown';
};

/**
 * Get Connected Device ble name by features
 * @returns
 */
export const getDeviceBleName = (features?: Features): string | null => {
  if (features == null) return null;
  return features.chargerwallet_ble_name || features.ble_name || null;
};

/**
 * Get Connected Device UUID by features
 */
export const getDeviceUUID = (features: Features) => {
  const serialNo = features.chargerwallet_serial_no || features.chargerwallet_serial || features.serial_no;
  return serialNo ?? '';
};

/**
 * Get Connected Device label by features
 */
export const getDeviceLabel = (features?: Features) => {
  if (!features) return null;

  const deviceType = getDeviceType(features);
  if (deviceType == null) return null;

  if (typeof features.label === 'string' && !isEmpty(features.label)) {
    return features.label;
  }

  const bleName = getDeviceBleName(features);
  if (!isEmpty(bleName)) return bleName;

  return `ChargerWallet ${deviceType.charAt(0).toUpperCase() + deviceType.slice(1)}`;
};

/**
 * Get firmware version range by features
 * Type has a higher priority than Model
 */
export const getMethodVersionRange = (
  features: Features | undefined,
  getVersionRange: (deviceModel: IDeviceType | IDeviceModel) => IVersionRange | undefined
): IVersionRange | undefined => {
  const deviceType = getDeviceType(features);
  let versionRange: IVersionRange | undefined = getVersionRange(deviceType);

  if (versionRange) {
    return versionRange;
  }

  const modelFallbacks: IDeviceModel[] = ['model_classic', 'model_mini', 'model_touch'];
  for (const model of modelFallbacks) {
    if (DeviceModelToTypes[model].includes(deviceType)) {
      versionRange = getVersionRange(model);
      if (versionRange) {
        return versionRange;
      }
    }
  }

  return versionRange;
};
