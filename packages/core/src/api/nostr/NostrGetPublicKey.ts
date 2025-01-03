import { NostrGetPublicKey as GetPublicKey } from '@chargerwallet/hd-transport';
import { UI_REQUEST } from '../../constants/ui-request';
import { serializedPath, validatePath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams } from '../helpers/paramsValidator';
import { BTCGetAddressParams } from '../../types/api/btcGetAddress';
import { NostrPublicKey } from '../../types/api/nostrGetPublicKey';

export default class NostrGetPublicKey extends BaseMethod<GetPublicKey[]> {
  hasBundle = false;

  init() {
    this.checkDeviceId = true;
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    this.hasBundle = Object.prototype.hasOwnProperty.call(this.payload, 'bundle');
    const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };

    validateParams(payload, [{ name: 'bundle', type: 'array' }]);

    this.params = [];

    payload.bundle.forEach((batch: BTCGetAddressParams) => {
      const addressN = validatePath(batch.path, 1);

      validateParams(batch, [
        { name: 'path', required: true },
        { name: 'showOnChargerWallet', type: 'boolean' },
      ]);

      const showOnChargerWallet = batch.showOnChargerWallet ?? true;

      this.params.push({
        address_n: addressN,
        show_display: showOnChargerWallet,
      });
    });
  }

  getVersionRange() {
    return {
      model_mini: {
        min: '3.6.0',
      },
      model_touch: {
        min: '4.7.0',
      },
    };
  }

  async run() {
    const responses: NostrPublicKey[] = [];

    for (let i = 0; i < this.params.length; i++) {
      const param = this.params[i];

      const res = await this.device.commands.typedCall('NostrGetPublicKey', 'NostrPublicKey', {
        ...param,
      });

      const response = {
        path: serializedPath(param.address_n),
        npub: res.message.npub,
        pub: res.message.publickey,
        publickey: res.message.publickey,
      };

      responses.push(response);
    }

    return Promise.resolve(this.hasBundle ? responses : responses[0]);
  }
}
