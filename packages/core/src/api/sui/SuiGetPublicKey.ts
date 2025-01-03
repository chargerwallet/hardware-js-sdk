import { UI_REQUEST } from '../../constants/ui-request';
import { serializedPath, validatePath } from '../helpers/pathUtils';
import { BaseMethod } from '../BaseMethod';
import { validateParams, validateResult } from '../helpers/paramsValidator';
import { SuiGetAddressParams, SuiPublicKey } from '../../types';

export default class SuiGetPublicKey extends BaseMethod<any> {
  hasBundle = false;

  init() {
    this.checkDeviceId = true;
    this.notAllowDeviceMode = [...this.notAllowDeviceMode, UI_REQUEST.INITIALIZE];

    this.hasBundle = !!this.payload?.bundle;
    const payload = this.hasBundle ? this.payload : { bundle: [this.payload] };

    // check payload
    validateParams(payload, [{ name: 'bundle', type: 'array' }]);

    // init params
    this.params = [];
    payload.bundle.forEach((batch: SuiGetAddressParams) => {
      const addressN = validatePath(batch.path, 3);

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
        min: '3.0.0',
      },
      model_touch: {
        min: '4.3.0',
      },
    };
  }

  async run() {
    const res = await this.device.commands.typedCall('BatchGetPublickeys', 'EcdsaPublicKeys', {
      paths: this.params,
      ecdsa_curve_name: 'ed25519',
    });

    const responses: SuiPublicKey[] = res.message.public_keys.map(
      (publicKey: string, index: number) => ({
        path: serializedPath((this.params as unknown as any[])[index].address_n),
        publicKey,
        pub: publicKey,
      })
    );

    validateResult(responses, ['pub'], {
      expectedLength: this.params.length,
    });

    return Promise.resolve(this.hasBundle ? responses : responses[0]);
  }
}
