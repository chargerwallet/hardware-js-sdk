import { KaspaAddress as HardwareKaspaAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type KaspaAddress = {
  path: string;
} & HardwareKaspaAddress;

export type KaspaGetAddressParams = {
  path: string | number[];
  prefix?: string;
  scheme?: string;
  showOnChargerWallet?: boolean;
};

export declare function kaspaGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & KaspaGetAddressParams
): Response<KaspaAddress>;

export declare function kaspaGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: KaspaGetAddressParams[] }
): Response<Array<KaspaAddress>>;
