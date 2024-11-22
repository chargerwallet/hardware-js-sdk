import { CoreApi } from '@chargerwallet/hd-core';
import { LowLevelCoreApi } from '@chargerwallet/hd-core/dist/lowLevelInject';
import { createContext } from 'react';

export default createContext<{
  type: 'Bluetooth' | 'USB';
  sdk: CoreApi | undefined;
  lowLevelSDK: LowLevelCoreApi | undefined;
}>({
  sdk: undefined,
  type: 'USB',
  lowLevelSDK: undefined,
});
