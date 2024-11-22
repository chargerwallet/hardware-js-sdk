import { EthereumVerifyMessageChargerWallet, Success, TypedCall } from '@chargerwallet/hd-transport';

export default async function ({
  typedCall,
  params,
}: {
  typedCall: TypedCall;
  params: EthereumVerifyMessageChargerWallet;
}): Promise<Success> {
  const res = await typedCall('EthereumVerifyMessage', 'Success', {
    signature: params.signature,
    message: params.message,
    address: params.address,
    // @ts-ignore
    chain_id: params.chain_id,
  });

  return Promise.resolve(res.message);
}
