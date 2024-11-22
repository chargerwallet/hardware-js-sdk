import { type PlaygroundProps } from '../components/Playground';

const api: PlaygroundProps[] = [
  {
    method: 'filecoinGetAddress',
    description: 'Get address',
    presupposes: [
      {
        title: 'Get address',
        value: {
          path: "m/44'/461'/0'/0/0",
          showOnChargerWallet: false,
        },
      },
      {
        title: 'Batch Get Address',
        value: {
          bundle: [
            {
              path: "m/44'/461'/0'/0/0",
              showOnChargerWallet: false,
            },
            {
              path: "m/44'/461'/0'/0/1",
              showOnChargerWallet: false,
            },
            {
              path: "m/44'/461'/0'/0/2",
              showOnChargerWallet: false,
            },
          ],
        },
      },
    ],
  },
  {
    method: 'filecoinSignTransaction',
    description: 'Sign Transaction',
    presupposes: [
      {
        title: 'Sign Transaction',
        value: {
          path: "m/44'/461'/0'/0/0",
          showOnChargerWallet: false,
          rawTx:
            '8a0055015a2fd22d821d5855e401118fef6ea0373dadbde355018ae51a9d6c9fe1872fd31b10c96df89106790297004900016345785d8a00001a0009354445001730ee6e440001865e0040',
        },
      },
    ],
  },
];

export default api;
