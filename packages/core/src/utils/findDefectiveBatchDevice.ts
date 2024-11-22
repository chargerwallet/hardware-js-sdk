import type { Features } from '../types';

export const findDefectiveBatchDevice = (features: Features) => {
  if (!features) return;
  const { chargerwallet_serial: chargerwalletSerial, se_ver: seVer } = features;
  if (!chargerwalletSerial) return;
  const versionNum = +chargerwalletSerial.slice(5);
  if (Number.isNaN(versionNum)) return;
  return versionNum >= 21032200001 && versionNum <= 21032201500 && seVer === '1.1.0.2';
};
