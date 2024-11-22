import { NEMAddress as HardwareNEMAddress } from '@chargerwallet/hd-transport';
import type { CommonParams, Response } from '../params';

export type NEMAddress = {
  path: string;
} & HardwareNEMAddress;

export type NEMGetAddressParams = {
  path: string | number[];
  network?: number;
  showOnChargerWallet?: boolean;
};

export declare function nemGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & NEMGetAddressParams
): Response<NEMAddress>;

export declare function nemGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & { bundle?: NEMGetAddressParams[] }
): Response<Array<NEMAddress>>;
