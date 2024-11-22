import { InputScriptType, PublicKey } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type BTCPublicKey = {
  path: string;
  xpubSegwit?: string;
} & PublicKey;

export type BTCGetPublicKeyParams = {
  path: string | number[];
  coin?: string;
  showOnChargerWallet?: boolean;
  scriptType?: InputScriptType;
};

export declare function btcGetPublicKey(
  connectId: string,
  deviceId: string,
  params: CommonParams & BTCGetPublicKeyParams
): Response<BTCPublicKey>;

export declare function btcGetPublicKey(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: BTCGetPublicKeyParams[] }
): Response<Array<BTCPublicKey>>;
