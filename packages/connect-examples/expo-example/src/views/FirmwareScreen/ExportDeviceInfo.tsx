import { useIntl } from 'react-intl';
import { Button } from '../../components/ui/Button';
import { downloadFile } from '../../utils/downloadUtils';
import { useDeviceFieldContext } from './DeviceFieldContext';
import { getDeviceBasicInfo } from '../../utils/deviceUtils';

export const deviceInfoKeys = [
  //   ['device_id', 'label'],
  ['chargerwallet_device_type', 'chargerwallet_serial_no', 'chargerwallet_se_type'],
  ['chargerwallet_board_version', 'chargerwallet_board_hash', 'chargerwallet_board_build_id'],
  ['chargerwallet_boot_version', 'chargerwallet_boot_hash', 'chargerwallet_boot_build_id'],
  ['chargerwallet_firmware_version', 'chargerwallet_firmware_hash', 'chargerwallet_firmware_build_id'],
  ['chargerwallet_ble_version', 'chargerwallet_ble_hash', 'chargerwallet_ble_build_id', 'chargerwallet_ble_name'],
];

export const deviceSEInfoKeys = [
  ['chargerwallet_se01_version', 'chargerwallet_se01_hash', 'chargerwallet_se01_build_id', 'chargerwallet_se01_state'],
  ['chargerwallet_se01_boot_version', 'chargerwallet_se01_boot_hash', 'chargerwallet_se01_boot_build_id'],

  ['chargerwallet_se02_version', 'chargerwallet_se02_hash', 'chargerwallet_se02_build_id', 'chargerwallet_se02_state'],
  ['chargerwallet_se02_boot_version', 'chargerwallet_se02_boot_hash', 'chargerwallet_se02_boot_build_id'],

  ['chargerwallet_se03_version', 'chargerwallet_se03_hash', 'chargerwallet_se03_build_id', 'chargerwallet_se03_state'],
  ['chargerwallet_se03_boot_version', 'chargerwallet_se03_boot_hash', 'chargerwallet_se03_boot_build_id'],

  ['chargerwallet_se04_version', 'chargerwallet_se04_hash', 'chargerwallet_se04_build_id', 'chargerwallet_se04_state'],
  ['chargerwallet_se04_boot_version', 'chargerwallet_se04_boot_hash', 'chargerwallet_se04_boot_build_id'],
];

export function formatCurrentTime(timestamp: number) {
  const formatter = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return formatter.format(timestamp);
}

export function ExportDeviceInfo() {
  const intl = useIntl();
  const { features, chargerwalletFeatures } = useDeviceFieldContext();

  const getFieldValue = (field: string) => chargerwalletFeatures?.[field] ?? features?.[field] ?? '';

  const exportInfo = () => {
    const markdown = [];

    const {
      deviceType,
      serialNumber,
      bleVersion,
      bootloaderVersion,
      boardloaderVersion,
      firmwareVersion,
    } = getDeviceBasicInfo(features, chargerwalletFeatures);

    const bootloaderMode = intl.formatMessage({
      id:
        features?.bootloader_mode === true
          ? 'label__device_bootloader_statue'
          : 'label__device_firmware_status',
    });

    markdown.push(`# Device ChargerWallet ${deviceType} Info (${serialNumber})`);
    markdown.push(``);
    markdown.push(`${intl.formatMessage({ id: 'label__device_type_sdk' })}:    ${deviceType}`);
    markdown.push(`${intl.formatMessage({ id: 'label__device_uuid' })}:    ${serialNumber}`);
    markdown.push(
      `${intl.formatMessage({ id: 'label__device_device_statue' })}:    ${bootloaderMode}`
    );
    markdown.push(
      `${intl.formatMessage({ id: 'label__device_boardloader_version' })}:    ${boardloaderVersion}`
    );
    markdown.push(
      `${intl.formatMessage({ id: 'label__device_bootloader_version' })}:    ${bootloaderVersion}`
    );
    markdown.push(
      `${intl.formatMessage({ id: 'label__device_firmware_version' })}:    ${firmwareVersion}`
    );
    markdown.push(
      `${intl.formatMessage({ id: 'label__device_bluetooth_version' })}:    ${bleVersion}`
    );

    markdown.push(``);
    markdown.push(``);
    markdown.push(`## Device Info`);
    // markdown.push(`| Key | Value |`);
    // markdown.push(`| --- | --- |`);
    deviceInfoKeys.forEach(keys => {
      keys.forEach(key => {
        const value = getFieldValue(key);
        markdown.push(`${key}:    ${value}`);
      });
      markdown.push(``);
    });

    markdown.push(``);
    markdown.push(``);
    markdown.push(`## Device SE Info`);
    // markdown.push(`| Key | Value |`);
    // markdown.push(`| --- | --- |`);
    deviceSEInfoKeys.forEach(keys => {
      keys.forEach(key => {
        const value = getFieldValue(key);
        markdown.push(`${key}:    ${value}`);
      });
      markdown.push(``);
    });
    markdown.push(``);

    const formatTime = formatCurrentTime(Date.now())
      ?.replace(/:/g, '')
      ?.replace(/\//g, '')
      ?.replace(/ /g, '-');
    let downloadFileName = `${deviceType}-${serialNumber}-${formatTime}.txt`;
    if (features.bootloader_mode === true) {
      downloadFileName = `${deviceType}-bootloader-${serialNumber}-${formatTime}.txt`;
    }

    downloadFile(downloadFileName, markdown.join('\n').toString());
  };

  return (
    <Button variant="primary" size="medium" onPress={exportInfo}>
      {intl.formatMessage({ id: 'label__device_info_export' })}
    </Button>
  );
}
