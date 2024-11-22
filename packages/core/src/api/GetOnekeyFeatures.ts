import semver from 'semver';
import { UI_REQUEST } from '../constants/ui-request';
import { fixVersion } from '../utils/deviceFeaturesUtils';
import { BaseMethod } from './BaseMethod';

export default class GetChargerwalletFeatures extends BaseMethod {
  init() {
    this.notAllowDeviceMode = [
      ...this.notAllowDeviceMode,
      UI_REQUEST.INITIALIZE,
      UI_REQUEST.BOOTLOADER,
    ];
    this.useDevicePassphraseState = false;
    this.skipForceUpdateCheck = true;
  }

  async run() {
    const { message } = await this.device.commands.typedCall('ChargerwalletGetFeatures', 'ChargerwalletFeatures');
    if (!!message.chargerwallet_firmware_version && !semver.valid(message.chargerwallet_firmware_version)) {
      message.chargerwallet_firmware_version = fixVersion(message.chargerwallet_firmware_version);
    }
    return Promise.resolve(message);
  }
}
