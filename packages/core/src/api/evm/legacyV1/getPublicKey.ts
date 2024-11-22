import { EthereumGetPublicKeyChargerWallet, MessageResponse, TypedCall } from '@chargerwallet/hd-transport';

export default async function ({
  typedCall,
  param,
}: {
  typedCall: TypedCall;
  param: EthereumGetPublicKeyChargerWallet;
}): Promise<MessageResponse<'EthereumPublicKey'>> {
  return typedCall('EthereumGetPublicKey', 'EthereumPublicKey', {
    address_n: param.address_n,
    show_display: param.show_display,
    // @ts-ignore
    chain_id: param.chain_id,
  });
}
