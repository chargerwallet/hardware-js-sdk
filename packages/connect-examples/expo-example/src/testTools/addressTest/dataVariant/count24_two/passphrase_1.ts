import type { AddressTestCaseData } from '../../data/types';

export default {
  name: 'two-passphrase24-密语1',
  passphrase: 'temp10086',
  passphraseState: 'mgGpxhbSthC4jMPvS88CYL28dXH5sb46nc',
  description: '助记词详见 https://chargerwallet.atlassian.net/wiki/spaces/CHARGERWALLET/pages/429490457',
  data: [
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Legacy',
      params: {
        path: "m/44'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': '1CBL65xaeaKPHvMhmNDUzKEpUHEi7CTShL',
        '0/A2147483647': '1GgBmVNS8CWa9NH6amLzhcFu123MFoPApV',
        '0/A1': '1Jtifx96XPmkHCuabi5y3WTgVXsfiQvowK',
        '0/A2147483646': '12sxLSnpGK1nj7NsNYbzJdPYnwpCpP4DB2',
        '0/A45656668': '1A7NFSHLjEg2htCVhDZ25FWDHMrtHiwB5z',
        '2147483647/A0': '1CQKuHmvKDTx2WjKGQ7kTZiD7GFVd5FuY5',
        '2147483647/A2147483647': '1EW8VsGtdCnmcxpvmQUEM4GMPADnLWRKYt',
        '2147483647/A1': '1HixBeLXjDSSWFacHMtRi1a4qPufwwkGPK',
        '2147483647/A2147483646': '1EW5x3jYbBi67SrLUmuTTzoKUCAxMuZjBQ',
        '2147483647/A45656668': '1LzrKA2B1P1KPirMjqfYtiFuHkxuohierw',
        '1/A0': '16y13hRnrUseTUxok1UqYFkCzDPoS3h1tT',
        '1/A2147483647': '1MBVkyxAy3N9DGPpYb6ShTHBLDemRr3yLV',
        '1/A1': '1MrQQKhJkZv5mbXFCsqg1nWFa4xUuY6bj6',
        '1/A2147483646': '19ouDjvEx4n22qqhqu9b8TYpWpTYfQhpWZ',
        '1/A45656668': '18BbeJmEqmTL9emUMCJUyBmAw2h82Warzy',
        '2147483646/A0': '1BLV2o9UYUE3bJ7vPGcifaesJPG1SQWKht',
        '2147483646/A2147483647': '18vrGKLVrhoAkWJWKYzHxaoDtobZJhCNjz',
        '2147483646/A1': '1NoiuPni1hsakvJWhjPNoMh48Gdr4v2Dhn',
        '2147483646/A2147483646': '1EHEWudgyg7dGwn1qNFzEMhJUkfa1UNDaA',
        '2147483646/A45656668': '136YskR69U6p7X2pHPrD6fJG65LruXt1m5',
        '8974594/A0': '1GyDnAoSLUfR3kL3kc7rf16keCQX2j3aMX',
        '8974594/A2147483647': '1G9kUsRofsfRWg6qiD2TgWK4mvZPCZM3ZP',
        '8974594/A1': '1Ce77oKm95wVtoRS7FyhRjQTK8NiH9ZUSM',
        '8974594/A2147483646': '15dtrccQiuyrsdiusLi8AfSGzYTpzRMR3g',
        '8974594/A45656668': '1Ev6CRcQHucHjVGwo2LdbvBxtU4UBVBBFa',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Nested SegWit',
      params: {
        path: "m/49'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': '34DfyrxVGYfqnGmcapQ8v9EnTEWaiP4deV',
        '0/A2147483647': '3HK7GEHHeqFTYX5aQyjuN8X6H3iV49YBd7',
        '0/A1': '344pym6ohUe51gTDTEEkUDyaccScmjtcmh',
        '0/A2147483646': '3BXw5wx8RSkWPakKgqhACgtTVE8bhSeJ4X',
        '0/A45656668': '36gEgxXR7sT36khnsjwyCrkrCemh5bqahY',
        '2147483647/A0': '3Eewt5a1MX1d1hyUvuSYFuacx9SgmgydUz',
        '2147483647/A2147483647': '3EJBHgRX9BpDi8BWk5HufKvnhHLixGJBBN',
        '2147483647/A1': '35pmEQMsxV4aSThDfYTsg5iq2kgSgjyUsS',
        '2147483647/A2147483646': '3R1JfdigGKncyY83ZY1zp4zNtPMLRrYT3A',
        '2147483647/A45656668': '3KdTBczCYLGDb5zzuCy8L7sQQ9bupLgQiP',
        '1/A0': '327UNVRmLdV7pjC5kujJeVVf59gENvn3Ts',
        '1/A2147483647': '39EBQiS6ZoeDE8oDBHnA5rQZ2rWFTbtwPA',
        '1/A1': '38inwsE23jYrK2XfmhJz4JkvZmLNNCvtKD',
        '1/A2147483646': '39E2qvDkCX66QQpFkcqVdbkpp6BkH7uxv5',
        '1/A45656668': '35kKkVoqCPDaBY8VTjBty7t6ncHCFHvKsX',
        '2147483646/A0': '3A1W8NSiu7f5Bz1FVCqc6ncS18RwNfGWwc',
        '2147483646/A2147483647': '3FyWDThnFxciZYTNKvt3KYVAkRXLdnPCo3',
        '2147483646/A1': '3EJaC6VQC6ct6y6esUBszWeQiLnw63Go7K',
        '2147483646/A2147483646': '3Ebw9sC4RvSHMGJ6tDqgHXdsP1ybWvUGYf',
        '2147483646/A45656668': '3F89e7mracGcT3qNjZGXrbZDWipTk5gp3Z',
        '8974594/A0': '3HN2LiLTGMonhLdzMpFA6FyHVYm6T2M14f',
        '8974594/A2147483647': '32ErtW1oezDtPp7viEcWFoN6u9hYBqzAo1',
        '8974594/A1': '3JK1GzkGqnwyUoPpEHHAh7Rg7up2dCx2uS',
        '8974594/A2147483646': '3FvNfdsJGQtYwKSp416zPhGMRnHyB3zQXz',
        '8974594/A45656668': '3DGqm7HM9MP4q4x2jSabcspEn5dKGpMKBe',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Native SegWit"',
      params: {
        path: "m/84'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': 'bc1qc25nvpj54xyg5dtxz9sa26fav4e2zw9svsms67',
        '0/A2147483647': 'bc1qjc22jzxkthz08a0rz2l8f8tedgzrdv6tju697e',
        '0/A1': 'bc1qurepzrefz9h7nr4uwhgh30sz0nnaqv47cv7456',
        '0/A2147483646': 'bc1qjhncs8ey7l47shyljghkfmw8kat2cq25n8y6c8',
        '0/A45656668': 'bc1q3pfrfa2uvtlxpffnryk0fwk46dkrd5hkwrgawy',
        '2147483647/A0': 'bc1q3zhyt2zck08hnc7hfdv5zp7cp8rjly62l4ma92',
        '2147483647/A2147483647': 'bc1qva6z5yhqzh6j36358m3h6gmcymq9rr8hh5h3vr',
        '2147483647/A1': 'bc1qjxcmreesegzt7ye6tymg8gzuthqvuwcx3gc7u5',
        '2147483647/A2147483646': 'bc1qaelelgp9pq6ajcczmc4lkxx6wecr5kl9tg5q36',
        '2147483647/A45656668': 'bc1qq57ck6crtk38f45m5y3eg5r06agq565fmfk8qj',
        '1/A0': 'bc1qtnn67p3fe2mr6u8kwprjse0pe8e4zgdj487esc',
        '1/A2147483647': 'bc1qunrme6tgrrflpd204yptkd8jnapj5g2nym4azs',
        '1/A1': 'bc1qytfdh73ptrkpv8faq9xd48ftkxk80umaj0cdr6',
        '1/A2147483646': 'bc1q5rgypfth6kn6uuvw054zqghhx0w88dnzlkr3ej',
        '1/A45656668': 'bc1qrmxau7w9weyawc6lud0dnhuhgcpwyurv9at5t9',
        '2147483646/A0': 'bc1qckqzdv59ltxsjcnfsyk7hvx435zfeljmmgyncp',
        '2147483646/A2147483647': 'bc1qgtlpy9l8q4adjjf3q2v2x0lnfrna3pzpm303gz',
        '2147483646/A1': 'bc1qm3rcdhj29fnw6eh2a8047g3etanhh5ce2alydu',
        '2147483646/A2147483646': 'bc1qrsfkjj68v2rw23yjeht2t6knq8p6zgv39gn3az',
        '2147483646/A45656668': 'bc1qnhwgexf5735cgc9gzp54rwz6xaskw3tt4qmdxw',
        '8974594/A0': 'bc1qnj5k44ayeul02pmu04dwlduke53dstcfjf69wt',
        '8974594/A2147483647': 'bc1q0u86dhaaxjn9dj839lc84q3q39j6zjs6fvt6we',
        '8974594/A1': 'bc1qpyghf4zxks8yrdxpz8jdvtstkyrklfczyga6ur',
        '8974594/A2147483646': 'bc1q80qsh8d4d75lxdpzxnd7heux5fz03d5twv3jzm',
        '8974594/A45656668': 'bc1q2e0s09apej644n5cvzwhwp7wng6x3ksux6unrk',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Taproot"',
      params: {
        path: "m/86'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': 'bc1pmm9lcx08gy7l9uemk6kjnyghjma4ll8zl52jwsm5l5lwncn782rs0cexz6',
        '0/A2147483647': 'bc1pqu4qjd47zzkswm30q7uqqq5zfz65r4ydez8xvwtq7rf0r4dhmfhsehn9du',
        '0/A1': 'bc1ptdnhkma777wz5ag6y9q3n0wj4pwa7j2mxfu8jt3nxcqkfyxel0wq4trgw7',
        '0/A2147483646': 'bc1pjqmuejjn9qwmww5gs6z80snzzy8qgl49646wl35ltlq9qms5ndkssnk8am',
        '0/A45656668': 'bc1pgctkv359ev8dawu6rcjpzm8c43aq52nzuarfr3yjqc6tzl2ekwhq73chjn',
        '2147483647/A0': 'bc1pjkwuyy35c3tqul6e6mlqqmp00y2ssu68z6mm6s7qwxa3l6jqe6xsevlqc0',
        '2147483647/A2147483647': 'bc1pg9p6vwwl2nl5n2m3mk263jqxcavfsg35ertuujqu39j05semhtzsqgx8ce',
        '2147483647/A1': 'bc1pn7mft9xmylxxlenuc0t4k5w7jd3grvnff4pw5ump3yta37edus7qyv9mar',
        '2147483647/A2147483646': 'bc1p25yemx79j5ryq5gg3mcdv940cjgny7xq9qg5g0vu7kkygdv6g5msgh3nw8',
        '2147483647/A45656668': 'bc1pmqnsypu5nwj0s6w73d0ucm39a7elug5jza2untyzz90x4v7mnzwqpksgnr',
        '1/A0': 'bc1pj5x4f2jywv939a00m06qmp8ax8hqcmdpwav39xkzutsl3xucxd5qh60cps',
        '1/A2147483647': 'bc1phj5twh8xhxgpw7c4fjqnahyys83ucmr0wrzyuyu3h2rnw7vl6yfqyq7yqx',
        '1/A1': 'bc1padpwm50amfj63msp8gehvfvx8r75535skr4zvh90r8x8n3ansfqsal9sqk',
        '1/A2147483646': 'bc1pq6zjyjx7jatncr8vls3clacfnsy58a5gmdgxx257rytl8lgaw6xs4p8kvx',
        '1/A45656668': 'bc1pgh0sggjrtz8539lwwgna2a3zn9a6y5454eeuv4gw9t7qe8kgmupqj02h5d',
        '2147483646/A0': 'bc1phlhxguvvsywdwhndzltp2dluwp3axh87hte8fzph6kh4skmnddjshan7ja',
        '2147483646/A2147483647': 'bc1punyatv37tnjzu4wn07pll2uxjwqp7rrrktq38rcmxdp6umxmf4xseslsxt',
        '2147483646/A1': 'bc1pmukv5gkshghuqgm0gqysk3h9jdj5tdkuzjj8wm5m0y2mcsq9sppsqpfc4c',
        '2147483646/A2147483646': 'bc1puywcnt334urhg88wg4fujqmslmcs48aackqxhhm43h02c4gfaeyqsnry5z',
        '2147483646/A45656668': 'bc1pmge2qu8z6jd92azhgy8888hs9qepaskrsu4h93yv9wm3hjeq2mdsrnx056',
        '8974594/A0': 'bc1pry852x737eup8g3suffsu4acgqgvk2rqrd72ea2s056tvgau8ggsmq5ntf',
        '8974594/A2147483647': 'bc1paafv5ttx0dyv6ktpy9uhlhrzjndgjngsgqya265unxghj37swqsqvaxsa9',
        '8974594/A1': 'bc1ptup9yfgqkawy02e03gqthuvmgp4wmwlndcguuh7sjl3s0wl6986qgj3gge',
        '8974594/A2147483646': 'bc1p98f3djw4037ksjv9dn8hlrhzjw4fupt8hf7q3522pflnf3xs7rnsq2ccv3',
        '8974594/A45656668': 'bc1pv3c24qyypyautxvqdw878t5n8a2nv5gmj4n66k6zgwpxpkm6yytquhc3f4',
      },
    },
  ],
} as AddressTestCaseData;
