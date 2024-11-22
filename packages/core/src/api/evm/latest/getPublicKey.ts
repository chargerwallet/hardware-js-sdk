import { EthereumGetPublicKeyChargerWallet, MessageResponse, TypedCall } from '@chargerwallet/hd-transport';

export default async function ({
  typedCall,
  param,
}: {
  typedCall: TypedCall;
  param: EthereumGetPublicKeyChargerWallet;
}): Promise<MessageResponse<'EthereumPublicKeyChargerWallet'>> {
  return typedCall('EthereumGetPublicKeyChargerWallet', 'EthereumPublicKeyChargerWallet', {
    ...param,
  });
}
