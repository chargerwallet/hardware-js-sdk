import { EthereumVerifyMessageChargerWallet, Success, TypedCall } from '@chargerwallet/hd-transport';

export default async function ({
  typedCall,
  params,
}: {
  typedCall: TypedCall;
  params: EthereumVerifyMessageChargerWallet;
}): Promise<Success> {
  const res = await typedCall('EthereumVerifyMessageChargerWallet', 'Success', {
    ...params,
  });

  return Promise.resolve(res.message);
}
