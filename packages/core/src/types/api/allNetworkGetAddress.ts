import type { CommonParams, Response } from '../params';
import type { CardanoAddressParameters } from './cardano';

export type INetwork =
  | 'evm'
  // BTC forks
  | 'btc'
  | 'tbtc'
  | 'doge'
  | 'neurai'
  | 'ltc'
  | 'bch'
  // Other
  | 'sol'
  | 'algo'
  | 'near'
  | 'stc'
  | 'cfx'
  | 'tron'
  | 'aptos'
  | 'xrp'
  | 'cosmos'
  | 'ada'
  | 'sui'
  | 'fil'
  | 'dot'
  | 'kaspa'
  | 'nexa'
  | 'dynex'
  | 'nervos'
  | 'scdo'
  | 'ton'
  | 'alph'
  | 'nostr';

export type CommonResponseParams = {
  path: string;
  network: INetwork;
  chainName?: string;
  prefix?: string;
};

export type AllNetworkAddressParams = {
  path: string | number[];
  network: INetwork;
  chainName?: string;
  prefix?: string;
  showOnChargerWallet?: boolean;

  includePublicKey?: boolean;
  group?: string;
};

type AllNetworkAddressPayload =
  | {
      address: string;
      pub?: string;
      /**
       * @deprecated Use `pub` instead.
       */
      publicKey?: string;
      // Nostr public key (bech32)
      npub?: string;
    }
  | {
      // Cardano
      addressParameters: CardanoAddressParameters;
      protocolMagic: number;
      networkId: number;
      serializedPath: string;
      serializedStakingPath: string;
      address: string;
      xpub?: string;
      stakeAddress?: string;
    }
  | {
      // BTC
      node: {
        depth: number;
        fingerprint: number;
        child_num: number;
        chain_code: string;
        private_key: string | null;
        public_key: string;
      };
      xpub: string;
      root_fingerprint: number;
      xpubSegwit: string;
    };

export type AllNetworkAddress = CommonResponseParams & {
  success: boolean;
  payload?:
    | AllNetworkAddressPayload
    | {
        error: string;
        code: number;
        connectId?: string;
        deviceId?: string;
        params: any;
      };
};

export type AllNetworkGetAddressParams = {
  bundle: AllNetworkAddressParams[];
};

export declare function allNetworkGetAddress(
  connectId: string,
  deviceId: string,
  params: CommonParams & AllNetworkGetAddressParams
): Response<AllNetworkAddress[]>;
