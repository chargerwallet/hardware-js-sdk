// create context save feature chargerwalletFeature

// Path: packages/connect-examples/expo-example/src/views/FirmwareScreen/DeviceFieldContext.ts
// Compare this snippet from packages/connect-examples/expo-example/src/views/FirmwareScreen/DeviceField.tsx:

import { createContext, useContext } from 'react';
import type { Features, ChargerwalletFeatures } from '@chargerwallet/hd-core';

export const DeviceFieldContext = createContext<{
  features?: Features;
  chargerwalletFeatures?: ChargerwalletFeatures;
}>({
  features: undefined,
  chargerwalletFeatures: undefined,
});

export function useDeviceFieldContext() {
  return useContext(DeviceFieldContext);
}
