import { SuiAddress as HardwareSuiAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type SuiAddress = {
  path: string;
  pub?: string;
  /**
   * @deprecated Use `pub` instead.
   */
  publicKey?: string;
} & HardwareSuiAddress;

export type SuiGetAddressParams = {
  path: string | number[];
  showOnChargerWallet?: boolean;
};

export declare function suiGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & SuiGetAddressParams
): Response<SuiAddress>;

export declare function suiGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: SuiGetAddressParams[] }
): Response<Array<SuiAddress>>;
