import { EthereumGetAddressChargerWallet, MessageResponse, TypedCall } from '@chargerwallet/hd-transport';

export default async function ({
  typedCall,
  param,
}: {
  typedCall: TypedCall;
  param: EthereumGetAddressChargerWallet;
}): Promise<MessageResponse<'EthereumAddressChargerWallet'>> {
  return typedCall('EthereumGetAddressChargerWallet', 'EthereumAddressChargerWallet', {
    ...param,
  });
}
