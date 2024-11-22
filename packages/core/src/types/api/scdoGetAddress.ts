import { ScdoAddress as HardwareScdoAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type ScdoAddress = {
  path: string;
} & HardwareScdoAddress;

export type ScdoGetAddressParams = {
  path: string | number[];
  showOnChargerWallet?: boolean;
};

export declare function scdoGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & ScdoGetAddressParams
): Response<ScdoAddress>;

export declare function scdoGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: ScdoGetAddressParams[] }
): Response<Array<ScdoAddress>>;
