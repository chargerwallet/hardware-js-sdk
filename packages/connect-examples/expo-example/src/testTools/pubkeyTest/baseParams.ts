export const INDEX_MARK = '$$INDEX$$';
export const CHANGE_MARK = '$$CHANGE$$';
export const ADDRESS_INDEX_MARK = '$$ADDRESS_INDEX$$';

export const baseParams = {
  cardanoGetPublicKey: {
    path: `m/1852'/1815'/${INDEX_MARK}'/0/0`,
    showOnChargerWallet: false,
  },
  aptosGetPublicKey: {
    path: `m/44'/637'/${INDEX_MARK}'/0'/0'`,
    showOnChargerWallet: false,
  },
  btcGetPublicKey: {
    path: `m/44'/0'/0'/0/${INDEX_MARK}`,
    coin: 'btc',
    showOnChargerWallet: false,
  },
  cosmosGetPublicKey: {
    path: `m/44'/118'/0'/0/${INDEX_MARK}`,
    showOnChargerWallet: false,
    curve: 'secp256k1',
  },
  evmGetPublicKey: {
    path: `m/44'/60'/0'/0/${INDEX_MARK}`,
    showOnChargerWallet: false,
  },
  nostrGetPublicKey: {
    path: `m/44'/1237'/${INDEX_MARK}'/0/0`,
    showOnChargerWallet: false,
  },
  polkadotGetAddress: {
    path: `m/44'/354'/${INDEX_MARK}'/0'/0'`,
    prefix: '0',
    network: 'polkadot',
    showOnChargerWallet: false,
  },
  xrpGetAddress: {
    path: `m/44'/144'/${INDEX_MARK}'/0/0`,
    showOnChargerWallet: false,
  },
  suiGetPublicKey: {
    path: `m/44'/784'/${INDEX_MARK}'/0'/0'`,
    showOnChargerWallet: false,
  },
};
