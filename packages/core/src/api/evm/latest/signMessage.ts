import {
  EthereumMessageSignature,
  EthereumSignMessageChargerWallet,
  TypedCall,
} from '@chargerwallet/hd-transport';

export default async function ({
  typedCall,
  params,
}: {
  typedCall: TypedCall;
  params: EthereumSignMessageChargerWallet;
}): Promise<EthereumMessageSignature> {
  const res = await typedCall('EthereumSignMessageChargerWallet', 'EthereumMessageSignatureChargerWallet', {
    ...params,
  });

  return Promise.resolve(res.message);
}
