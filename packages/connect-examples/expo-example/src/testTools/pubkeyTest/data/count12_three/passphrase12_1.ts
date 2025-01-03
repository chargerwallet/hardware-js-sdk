import { INDEX_MARK } from '../../baseParams';
import { PubkeyTestCaseData } from '../types';

export default {
  name: 'three-passphrase12-密语1',
  passphrase: "qwertyuiopasdfghjklzxcvbnm1234567890-=[];',./12345",
  passphraseState: 'n3igG2n49CvSEt12j1jr4SKkp45oUWWmAT',
  description: '助记词详见 https://chargerwallet.atlassian.net/wiki/spaces/CHARGERWALLET/pages/427983033',
  data: [
    {
      method: 'cardanoGetPublicKey',
      result: {
        0: {
          publicKey:
            '159a499d1b3c7d51162559c759a8a3e4d942d8d6c27e284cd6dfbd3e977933f1cc75b43a73ba8693080af2c6df0468f46516f020f0dac4557249d05be5d7c3b2',
        },
        1: {
          publicKey:
            '88a9a2ec8bdea6b612faa678ed8cc05d2a5cae697de05a9f580a2e98ef4c9d7e7fd0773b6b8fd439d766f66122442de38c177f511acb4ad9fde6d616407ce168',
        },
        10086: {
          publicKey:
            '20f4ba764dc5c8d2cadcf25ae3a475d4ffaadd4fa318582bb1fec336c7cbdf4aba6dc8605a7976e70f530e6e0f308a2fca822013c0c3b3b1406d13dae5f66cf2',
        },
      },
    },
    {
      method: 'aptosGetPublicKey',
      result: {
        0: { publicKey: '9d45273cf7fb6c5eca33e6d335779000ef734c0a7444d11e81a356709a0f00aa' },
        1: { publicKey: 'd9463f819b97068fd5cef1478574e93bbdd8a6f12ddcb158655acc1d17a34a00' },
        10086: { publicKey: '2c952f199d02a71dd6c3ee562a917a3034e981d94701d9e36b3dd3be5a2027bd' },
      },
    },
    {
      method: 'btcGetPublicKey',
      name: 'btcGetPublicKey-pubkey',
      result: {
        0: {
          node: {
            public_key: '03a26000e7a6f9112857966330f99bc39b4c72526e5d9a7ee7923446d9818aff33',
          },
          xpub: 'xpub6FSCQPLVaoxBJGPoa15yXNQbXQ2v8aXzdJF9dz9UnvRGPuNAE6SYJRDXxJoJFAzXsg7hwFas5Sfq8h4YcAhEVrZxew46SBo5u5sqSVAUqXL',
        },
        1: {
          node: {
            public_key: '02c4176f68f7a5172e968149fb6042c1991dff3d84a88718a8ae51b830df866098',
          },
          xpub: 'xpub6FSCQPLVaoxBLusy9zmA1bPkYuj8KfbtVuyj7TebVJsGwr2Kmw8vm57muggPdpsfDx6VwHs73hRtMaWJf14qxkUKA3eDgLGZCmaeAB3bfMP',
        },
        10086: {
          node: {
            public_key: '03e4a93299cb46268286952029985ae43310f5739d4682f2dbf983a16997e4a2fc',
          },
          xpub: 'xpub6FSCQPLVap5pY9WfkBpzoxmBqqLu6KHKYARNCCWyWDQWrLWtxn34epmcGXRAYXssAJfoWTkxufwVGWPaXy9dFsWjWA2swaa7ruB8N9aNCAz',
        },
      },
    },
    {
      method: 'btcGetPublicKey',
      name: 'btcGetPublicKey-xpub',
      params: {
        path: `m/44'/0'/${INDEX_MARK}'`,
        coin: 'btc',
      },
      result: {
        0: {
          node: {
            public_key: '027fb6d3f72e7ea4fb81f90135fb79054c4a5805e5ba816a90a848fbd7465b9cf8',
          },
          xpub: 'xpub6DUhZvNUUKSQz7CcupvnZxL7JyezFMoefzFzi7McvLzoQZFmT6ZCCmDv2XCnS4yMoocVPjf3S91GtPeBf31hvMxw72jbuFXDwKnkZ9wW35L',
        },
        1: {
          node: {
            public_key: '02c67d034e009a3f09340aaf1e068407f432600fb728b7949653ad781fb10cf8dd',
          },
          xpub: 'xpub6DUhZvNUUKSR4N3pcUNR6cjNTEeJRpFp75ahguUkqo8TvzghMbcuYDWibGoHiDdjyFS88emjE7ApdARxPyT9DanWEacAmPjmYiicnynEgX9',
        },
        10086: {
          node: {
            public_key: '03d365ec2d85679ff8258d6ed9516e3df1cd255a583c2cd59a94eec9cce579d4e3',
          },
          xpub: 'xpub6DUhZvNUUKa4CHJ6uHBEzoX1ZVrGa3f1t6QfD6CmN76XEnrDKc6wQuiJLuEUmU8w8pNEBnvWDY1aWQPvhNZeZtDGB6MmkWFgCGNjExDQSxe',
        },
      },
    },
    {
      method: 'cosmosGetPublicKey',
      result: {
        0: { publicKey: '03c2d9ac34e54b0fc3a689a218a68c705149b04bd4537111002f7513b0acb5ff80' },
        1: { publicKey: '020dca3f57f2fe4adfde0cbb1306cd8106711d574cac044e261af7ec014248780b' },
        10086: { publicKey: '02689ccc373f91384ba0c2ce44f2584337bb4d9478db70e6613b9244886a4bfed8' },
      },
    },
    {
      method: 'evmGetPublicKey',
      name: 'evmGetPublicKey-xpub',
      params: {
        path: `m/44'/60'/${INDEX_MARK}'`,
      },
      result: {
        0: {
          xpub: 'xpub6DAD6SRGfNeeTtf2UpfwZTGDqVR6aP9z5cK8iFEfzPzdThNhThtYMar6soVF8FJRNFV2nmWMmdpHyJ8c9c1MCfjP5oUx7hFVF2YF34NwZ78',
          publicKey: '02eb51197b5f4627893e3e297e32e61ad68ca109313d3178b8cd711e874a7c8a33',
        },
        1: {
          xpub: 'xpub6DAD6SRGfNeeWJR4mr1kgsb8c7FFtKM3KAh3mKJVJE4QKFRWcpkbK2U2tMjr3t4f7eYsqAHHajCQAbjGb3QAsEMESuBseQ6LfmrzXTa4QDN',
          publicKey: '0282640e38f06fa71b1ad19dd860b2ed61a3370530b9026af5bf7581ee826afef2',
        },
        10086: {
          xpub: 'xpub6DAD6SRGfNnHgYgGryQyEyTUnJ7iM1Fv1fUTVMewM73SR3k32THPtb6PFMnSZovLGnyQUz1sNB1yVTTe2xAssUqwxSX8SYQEcV42ecAaZRU',
          publicKey: '03456a5d810eed86bf866083981d20fed80a6b84ccd2f663c03f87ee8881a859e5',
        },
      },
    },
    {
      method: 'evmGetPublicKey',
      name: 'evmGetPublicKey-pubkey',
      result: {
        0: {
          xpub: 'xpub6FdpU3kKoHrNfef9EbiMEDmHEQC5225ZEiF8MrtakZiewx75aJPxTdJLMXozC8hJonZvjCP99tCYpEb1TQvtzixZSh1C2m4DdoZ6bSeG8yK',
          publicKey: '033af5a0e239fd7e75dcd963326ba5215e5523c488410d91f07960d2784866de34',
        },
        1: {
          xpub: 'xpub6FdpU3kKoHrNiN1e8GogzWR14tbxYyqBQ9FgWadgouUfkZH452J72kQ5EqLLtCc8mQyTJLAcvYp5WCFYPhgFFsdhVHKxxjfA5Js7D7GTArW',
          publicKey: '038188baac170388339aed1e2c0e46c189e9547dac51333c4fee91cd3405d75dca',
        },
        10086: {
          xpub: 'xpub6FdpU3kKoHz1sR11MnBL23fiCFomiCiUdJh476BjyXqUmMEFWK1qHv4srxu1BbGXFDhWUj4HCdzPVVNkoiaTrAGtFgMwTkzjTVmwBximLhn',
          publicKey: '0373e92a54bd7e101adbf6869243cac211e7506d8649e0c466edf4ca27deefd521',
        },
      },
    },
    {
      method: 'nostrGetPublicKey',
      result: {
        0: {
          npub: 'npub15g7rg3w50styyfyeuy68czrhlq9erm4rxa9s7lawn6zh5sza9w2sa7pg3n',
          publickey: 'a23c3445d47c16422499e1347c0877f80b91eea3374b0f7fae9e857a405d2b95',
        },
        1: {
          npub: 'npub13lh7sspxfmtd9jm9kwhn8hmeynmu85xmcfj7l5j6uv3ed3tp7veqvq3vqn',
          publickey: '8fefe840264ed6d2cb65b3af33df7924f7c3d0dbc265efd25ae32396c561f332',
        },
        10086: {
          npub: 'npub1kk2qdt7nqkujektp3xgv3scxgtn4d6jy08969wcv4gknf04x5zxs5ljl66',
          publickey: 'b59406afd305b92cd9618990c8c30642e756ea4479cba2bb0caa2d34bea6a08d',
        },
      },
    },
    {
      method: 'polkadotGetAddress',
      result: {
        0: { publicKey: '0x0456dde76a32986140d42f97e5b2a1216cb68c0a274bddf0b3c7d2f685233bcd' },
        1: { publicKey: '0x52997bfd494043c2b0434b3262f88e0e5aa1a1cdce4d4015c039188a05699934' },
        10086: { publicKey: '0x314605149f3112388a6a9f3b9b32796a70ba09b8dcf124a42dcdda1051de9239' },
      },
    },
    {
      method: 'xrpGetAddress',
      result: {
        0: { publicKey: '032c0f82d50a40a1ef181fbc33f35d2bbcc50b26a0e40c6caedbf9c952d70458e0' },
        1: { publicKey: '03d2dea6d0724a28a9e50c370db1edd4c748c770eef2c30dd48ba3ebced1f38c36' },
        10086: { publicKey: '0278da3617256d51a88943cc30a974a4bd10fc34ea2db11b1ec34460803f7859af' },
      },
    },
    {
      method: 'suiGetPublicKey',
      result: {
        0: { publicKey: '2a46ac3afc27e81039fa5001c88466b556c6558b4c811c8ed2ae7eeb057fd33b' },
        1: { publicKey: '265eb886d38848524b737e3ffa2d6e7409cbeb34720744e2e1ce665bfcc312b1' },
        10086: { publicKey: 'a254b772a85ebf65ac6a422dae9dfa626c63521e0485ceb8b37d9edc25f0eb81' },
      },
    },
  ],
} as PubkeyTestCaseData;
