import type { CommonParams, Response } from '../params';
import type { ChargerwalletFeatures } from '../device';

export declare function getChargerwalletFeatures(
  connectId?: string,
  params?: CommonParams
): Response<ChargerwalletFeatures>;
