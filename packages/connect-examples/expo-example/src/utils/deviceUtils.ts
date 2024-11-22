import {
  getDeviceBootloaderVersion,
  getDeviceFirmwareVersion,
  getDeviceType,
  getDeviceUUID,
} from '@chargerwallet/hd-core';
import type { Features, ChargerwalletFeatures } from '@chargerwallet/hd-transport';

export function getDeviceBasicInfo(
  features: Features | undefined,
  chargerwalletFeatures: ChargerwalletFeatures | undefined
) {
  const deviceType = getDeviceType(features)?.toUpperCase() || 'UNKNOWN';
  const serialNumber = features && getDeviceUUID(features);

  const bleBuildId = chargerwalletFeatures?.chargerwallet_ble_build_id || features?.chargerwallet_ble_build_id;
  const bleVersion = `${features?.ble_ver}-${bleBuildId}`;

  const bootloaderBuildId = chargerwalletFeatures?.chargerwallet_boot_build_id || features?.chargerwallet_boot_build_id;
  const bootloaderVersion =
    features && `${getDeviceBootloaderVersion(features)?.join('.')}-${bootloaderBuildId}`;

  const boardloaderVersion =
    features && `${features?.chargerwallet_board_version}-${chargerwalletFeatures?.chargerwallet_board_build_id}`;

  const firmwareBuildId =
    chargerwalletFeatures?.chargerwallet_firmware_build_id || features?.chargerwallet_firmware_build_id;
  const firmwareVersion =
    features && `${getDeviceFirmwareVersion(features)?.join('.')}-${firmwareBuildId}`;

  return {
    deviceType,
    serialNumber,
    bleVersion,
    bootloaderVersion,
    boardloaderVersion,
    firmwareVersion,
  };
}

export function getDeviceInfo(
  features: Features | undefined,
  chargerwalletFeatures: ChargerwalletFeatures | undefined
) {
  const {
    deviceType,
    serialNumber,
    bleVersion,
    bootloaderVersion,
    boardloaderVersion,
    firmwareVersion,
  } = getDeviceBasicInfo(features, chargerwalletFeatures);

  const firmwareHash = chargerwalletFeatures?.chargerwallet_firmware_hash || features?.chargerwallet_firmware_hash;

  const bootloaderHash =
    chargerwalletFeatures?.chargerwallet_boot_hash || features?.chargerwallet_boot_hash || features?.bootloader_hash;

  const se01BuildId = chargerwalletFeatures?.chargerwallet_se01_build_id || features?.chargerwallet_se01_build_id;
  const se01Version = `${features?.chargerwallet_se01_version || features?.se_ver}-${se01BuildId}`;
  const se01Hash = chargerwalletFeatures?.chargerwallet_se01_hash;

  const se02BuildId = chargerwalletFeatures?.chargerwallet_se02_build_id;
  const se02Version = `${features?.chargerwallet_se02_version}-${se02BuildId}`;
  const se02Hash = chargerwalletFeatures?.chargerwallet_se02_hash;

  const se03BuildId = chargerwalletFeatures?.chargerwallet_se03_build_id;
  const se03Version = `${features?.chargerwallet_se03_version}-${se03BuildId}`;
  const se03Hash = chargerwalletFeatures?.chargerwallet_se03_hash;

  const se04BuildId = chargerwalletFeatures?.chargerwallet_se04_build_id;
  const se04Version = `${features?.chargerwallet_se04_version}-${se04BuildId}`;
  const se04Hash = chargerwalletFeatures?.chargerwallet_se04_hash;

  const boardloaderHash = chargerwalletFeatures?.chargerwallet_board_hash || features?.chargerwallet_board_hash;

  const bleHash = chargerwalletFeatures?.chargerwallet_ble_hash || features?.chargerwallet_ble_hash;

  return {
    deviceType,
    serialNumber,
    boardloaderVersion,
    boardloaderHash,
    bootloaderVersion,
    bootloaderHash,
    se01Version,
    se01Hash,
    se02Version,
    se02Hash,
    se03Version,
    se03Hash,
    se04Version,
    se04Hash,
    firmwareVersion,
    firmwareHash,
    bleVersion,
    bleHash,
  };
}
