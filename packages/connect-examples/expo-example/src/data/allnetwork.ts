import { type PlaygroundProps } from '../components/Playground';

const api: PlaygroundProps[] = [
  {
    method: 'allNetworkGetAddress',
    description: 'Get address',
    presupposes: [
      {
        title: 'Batch Get Address',
        value: {
          bundle: [
            {
              network: 'btc',
              path: "m/44'/0'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'tbtc',
              path: "m/44'/1'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'ltc',
              path: "m/44'/2'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'bch',
              path: "m/44'/145'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'neurai',
              path: "m/44'/1900'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'doge',
              path: "m/44'/3'/0'/0/0",
              showOnChargerWallet: false,
            },

            {
              network: 'btc',
              chainName: 'bitcoin',
              path: "m/44'/0'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'testnet',
              path: "m/44'/1'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'litecoin',
              path: "m/44'/2'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'bcash',
              path: "m/44'/145'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'neurai',
              path: "m/44'/1900'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'dogecoin',
              path: "m/44'/3'/0'/0/0",
              showOnChargerWallet: false,
            },

            {
              network: 'evm',
              path: "m/44'/60'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'evm',
              path: "m/44'/60'/0'/0/0",
              chainName: '20',
              showOnChargerWallet: false,
            },

            {
              network: 'algo',
              path: "m/44'/283'/0'/0'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'aptos',
              path: "m/44'/637'/0'/0'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'ada',
              path: "m/1852'/1815'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'cfx',
              path: "m/44'/503'/0'/0/0",
              chainName: '1029',
              showOnChargerWallet: false,
            },
            {
              network: 'cfx',
              path: "m/44'/503'/0'/0/0",
              chainName: '1',
              showOnChargerWallet: false,
            },
            {
              network: 'cosmos',
              path: "m/44'/118'/0'/0/0",
              prefix: 'cosmos',
              showOnChargerWallet: false,
            },
            {
              network: 'cosmos',
              path: "m/44'/118'/0'/0/0",
              prefix: 'osmosis',
              showOnChargerWallet: false,
            },
            {
              network: 'dynex',
              path: "m/44'/29538'/0'/0'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'fil',
              path: "m/44'/461'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'kaspa',
              path: "m/44'/111111'/0'/0/0",
              prefix: 'kaspa',
              showOnChargerWallet: false,
            },
            {
              network: 'near',
              path: "m/44'/397'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'nexa',
              path: "m/44'/29223'/0'/0/0",
              prefix: 'nexa',
              showOnChargerWallet: false,
            },
            {
              network: 'nervos',
              path: "m/44'/309'/0'/0/0",
              chainName: 'ckb',
              showOnChargerWallet: false,
            },
            {
              network: 'dot',
              path: "m/44'/354'/0'/0'/0'",
              prefix: '0',
              chainName: 'polkadot',
              showOnChargerWallet: false,
            },
            {
              network: 'xrp',
              path: "m/44'/144'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'sol',
              path: "m/44'/501'/0'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'stc',
              path: "m/44'/101010'/0'/0'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'sui',
              path: "m/44'/784'/0'/0'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'tron',
              path: "m/44'/195'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'scdo',
              path: "m/44'/541'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'ton',
              path: "m/44'/607'/0'",
              showOnChargerWallet: false,
              // https://github.com/trustwallet/wallet-core/issues/3387
              // ton chain has a different derivation path
            },
            {
              network: 'alph',
              path: "m/44'/1234'/0'/0/0",
              includePublicKey: true,
              showOnChargerWallet: false,
              group: 0,
            },
            {
              network: 'nostr',
              path: "m/44'/1237'/0'/0/0",
              showOnChargerWallet: false,
            },
          ],
        },
      },
      {
        title: 'Batch ADA Get Address',
        value: {
          bundle: [
            {
              network: 'ada',
              path: "m/1852'/1815'/0'",
              showOnChargerWallet: false,
            },
            {
              network: 'dynex',
              path: "m/44'/29538'/0'/0'/0'",
              showOnChargerWallet: false,
            },
          ],
        },
      },
      {
        title: 'Batch Bitcoin Get Address',
        value: {
          bundle: [
            {
              network: 'btc',
              path: "m/44'/0'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'tbtc',
              path: "m/44'/1'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'ltc',
              path: "m/44'/2'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'bch',
              path: "m/44'/145'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'neurai',
              path: "m/44'/1900'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'doge',
              path: "m/44'/3'/0'/0/0",
              showOnChargerWallet: false,
            },

            {
              network: 'btc',
              chainName: 'bitcoin',
              path: "m/44'/0'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'testnet',
              path: "m/44'/1'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'litecoin',
              path: "m/44'/2'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'bcash',
              path: "m/44'/145'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'neurai',
              path: "m/44'/1900'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              network: 'btc',
              chainName: 'dogecoin',
              path: "m/44'/3'/0'/0/0",
              showOnChargerWallet: false,
            },
          ],
        },
      },
    ],
  },
];

export default api;
