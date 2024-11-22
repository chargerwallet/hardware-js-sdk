import type { CoreApi, LowLevelCoreApi } from '@chargerwallet/hd-core';

export const importSdk = async (isNodeEnv = false) => {
  if (isNodeEnv) {
    return (await import('@chargerwallet/hd-common-connect-sdk')).default as unknown as CoreApi;
  }
  return (await import('@chargerwallet/hd-web-sdk')).default.HardwareWebSdk as unknown as CoreApi;
};

export const importTopLevelSdk = async (isNodeEnv = false) => {
  if (isNodeEnv) {
    return (await import('@chargerwallet/hd-common-connect-sdk')).default as unknown as CoreApi;
  }
  return (await import('@chargerwallet/hd-web-sdk')).default.HardwareSDKTopLevel as unknown as CoreApi;
};

export const importLowLevelSDK = async () =>
  (await import('@chargerwallet/hd-web-sdk')).default.HardwareSDKLowLevel as unknown as LowLevelCoreApi;
