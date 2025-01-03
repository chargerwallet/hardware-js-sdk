import { MessageSignature } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type BTCSignMessageParams = {
  path: string | number[];
  messageHex: string;
  coin?: string;
  noScriptType?: boolean;
  dAppSignType?: 'ecdsa' | 'bip322-simple';
};

export declare function btcSignMessage(
  connectId: string,
  deviceId: string,
  params: CommonParams & BTCSignMessageParams
): Response<MessageSignature>;
