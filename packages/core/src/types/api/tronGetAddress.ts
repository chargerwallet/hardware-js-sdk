import { TronAddress as HardwareTronAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type TronAddress = {
  path: string;
} & HardwareTronAddress;

export type TronGetAddressParams = {
  path: string | number[];
  showOnChargerWallet?: boolean;
};

export declare function tronGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & TronGetAddressParams
): Response<TronAddress>;

export declare function tronGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: TronGetAddressParams[] }
): Response<Array<TronAddress>>;
