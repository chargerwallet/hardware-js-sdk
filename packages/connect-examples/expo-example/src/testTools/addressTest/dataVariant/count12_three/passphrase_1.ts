import type { AddressTestCaseData } from '../../data/types';

export default {
  name: 'three-passphrase12-密语1',
  passphrase: "qwertyuiopasdfghjklzxcvbnm1234567890-=[];',./12345",
  passphraseState: 'n3igG2n49CvSEt12j1jr4SKkp45oUWWmAT',
  description: '助记词详见 https://chargerwallet.atlassian.net/wiki/spaces/CHARGERWALLET/pages/259227649',
  data: [
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Legacy',
      params: {
        path: "m/44'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': '1MWF2mC6xiY8VsioWRom4nq9JACmpCFvLk',
        '0/A2147483647': '1D2SwRHCnnXzjYrgfLKLJFQRduoagCFkfG',
        '0/A1': '1E794Nn4qRFpsHeJRc3Wcus9LAznJRAbuC',
        '0/A2147483646': '1FDpxyjZSmcpCAzucAfBYsngPprY5nXjHj',
        '0/A45656668': '12ifdRuXS1Jn1t3Z2UEkkACKTmW8reTTYq',
        '2147483647/A0': '1KwqBvNSgEdSPytAzbfUJQEapbirSS6ZcF',
        '2147483647/A2147483647': '1AP6HERQ6sXyQzNn75zLqygcuiCXsGcQSw',
        '2147483647/A1': '18AWsgtm79KPYzAJeJHrxQhsLtZxbjGAki',
        '2147483647/A2147483646': '13rC1VW4iqqVyapqfgk4Bgfm7LN3rXHshZ',
        '2147483647/A45656668': '1CY2YgHdBHvXeGGfxAX2t9gRGsb1ykc4oK',
        '1/A0': '1GwT9Ux2jJiDYEn9qE9CfDXUfroHGqn61A',
        '1/A2147483647': '1CjmLbCWVpmDE9PVRxCebwmvY7huYLwvjL',
        '1/A1': '12EysQ8VWPJV8JHneeL3kskwi4FQrX3m62',
        '1/A2147483646': '1QLZpgorYsXKuNbcfUV44eDKixnLYcWYd6',
        '1/A45656668': '16i9SDmLTMprYhf85FS83WiBQTTMtPx2rc',
        '2147483646/A0': '1EAV3BLHW4EPEkpfZpBhsb86LN5MYM9hsW',
        '2147483646/A2147483647': '18XVAZxJQ2Ku8GG7B6c91Bg2wfsHe67BRM',
        '2147483646/A1': '14cSLNLeCs5NsXEMsTyqfkw1NPog77qB8e',
        '2147483646/A2147483646': '18Hk4CCpaXT1nCpZyon1vYcVjYq3YHDUGj',
        '2147483646/A45656668': '15LHypVeeDVt9HrR8Kx92S1PCkaJRQQUyw',
        '8974594/A0': '1159h31nZN5roVYTwA7HzBHHXrdUp42grN',
        '8974594/A2147483647': '1H6Qj7A5jaMPBRkSZD58aUfc59Zu1ubAc8',
        '8974594/A1': '1KW9jnVKiycKcfpBXo74s91n6fVWAidW63',
        '8974594/A2147483646': '15eNSW6m9iDVi6KPvfS1UX32g59KCqTnt9',
        '8974594/A45656668': '1Pq4aqbQYiZ6yXFCnnZ14kTnHsdpngzvWX',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Nested SegWit',
      params: {
        path: "m/49'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': '38Zv9tLDteBymR2qc7ZN4kUBgrt7e7fiFS',
        '0/A2147483647': '36QuozDnzExfgp493rdoW1FLBS7Tbwx4Cr',
        '0/A1': '3K3YhGiNaaXVtTyBJsVAfAQMupVkkfgKTg',
        '0/A2147483646': '3ESAS39y8joD5mxcWHPwGgW4ifvLEnDXtg',
        '0/A45656668': '3QfztDxxSVLsD9EZMn51wBTMrR9HSxyQEN',
        '2147483647/A0': '386se3HB8fB261FEBRZGYyjDP3X2TnC3BF',
        '2147483647/A2147483647': '3BQmQzQ2w8HKDs6FdWXJf2oq7eG4EHZED3',
        '2147483647/A1': '3NJ6CMAyMLprxDmZusL5QKd34gSfxSiyEM',
        '2147483647/A2147483646': '39DfgntYz5fYj4VYJkXnzdmrz9AvjcTCvB',
        '2147483647/A45656668': '3CcmwVaL7DNirRJmWFxm2zGCWuLPDg2A6U',
        '1/A0': '3GxSZyPfxk68KKrBQJBH9hjUCMrnwcr1Kc',
        '1/A2147483647': '3PdR1f5UzB7a85VC3F4ZzCcRKyezZg52iW',
        '1/A1': '3DCQyaesGFntVM4seQuc79m6sktEUcpxU8',
        '1/A2147483646': '3J51x4MVXLuuSgGaqvXcszezGst3MiBtSu',
        '1/A45656668': '31jxLPYyMWXqqx5AuY3dLtCBab8ehFBkaT',
        '2147483646/A0': '33JaFPVMpjW6PK1xHoRMTvHwLRVMajzRou',
        '2147483646/A2147483647': '3NfGqgY7rhPdHNv8C9pxwuDi1VVr58Ni8d',
        '2147483646/A1': '3F8QugMgy3vd7ovWw2zpLfAycVesZ5ZX6u',
        '2147483646/A2147483646': '39DZtkn24zjBgdJzSeZMJt5hUoAHXR2CiM',
        '2147483646/A45656668': '3Gcf3hH1NRUKx1WAg3r4jmSzD8NwnshzWN',
        '8974594/A0': '3B3BkWk4dsu6UXEePeHJhXH8pgX7evHtmV',
        '8974594/A2147483647': '33CVpcA2oPKNztigo6PF6UvGCg8Rp7HYsL',
        '8974594/A1': '3FmRC8k4R1HgkTs6jvzKdeL4FKhQ8KDLzZ',
        '8974594/A2147483646': '32DFuq7sLQ99kaavVGCD8zjXUyyZqUXLca',
        '8974594/A45656668': '3ET9H4w7Bt4scaCHYSyx6cGT3SUK7vKond',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Native SegWit"',
      params: {
        path: "m/84'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': 'bc1qqc5ps9vytynjktarajege0gfze6ejq8mzemhgt',
        '0/A2147483647': 'bc1qg35tl3arlgezxglkz4yv2l8j02uxj35chaq2x6',
        '0/A1': 'bc1qrrav3nvz8g6x52g920q8yks276ls8knmhe0x7x',
        '0/A2147483646': 'bc1qvvgymhdewl2j9547tq7uauktqgezvua85hgvk6',
        '0/A45656668': 'bc1qj0zyt3ydwq753k6v90yzuhkkgf3ak6tz4f4cc9',
        '2147483647/A0': 'bc1qhyau0py3fsflhl068gcmewwxp428xjqvcgrxlv',
        '2147483647/A2147483647': 'bc1q38aanc0zrvu6p8ja553ceqmrqw0fnlhgc95m77',
        '2147483647/A1': 'bc1qjwnssntuwenftvyk0exhcq5nj0mwnv6mywu5j0',
        '2147483647/A2147483646': 'bc1q0df3a3cvqm8lasuyn2nsa5sm0389r3gmucam5u',
        '2147483647/A45656668': 'bc1qjxgke5ns3neahjah6rzjmn3356wdgg0yhyrjh3',
        '1/A0': 'bc1qc8ym9k6hjxjkxwty4ffkd8uaprps02l5me0w6h',
        '1/A2147483647': 'bc1qte9tnkxwjqhysjjlt0jreq69xkd6aahy237jce',
        '1/A1': 'bc1qc690asvjhg3zvhpzyv0l9vh9ge6m2vjtmm66lq',
        '1/A2147483646': 'bc1q45p6mr48fvtutgkkhd54ysudgs4hpeh3zhg747',
        '1/A45656668': 'bc1qfy3vsycsr4f0qw9hk4ljl3qdsncae0addc3v2a',
        '2147483646/A0': 'bc1qgg4xm08xxm8qyuxydfp04qh8gpnkd6vzed2ars',
        '2147483646/A2147483647': 'bc1qqhmgjjc0z5wzdda9y96hyn2hxz3qtrjlhfcneh',
        '2147483646/A1': 'bc1qlt9c3xvc0tz6huqfk6p6ahyr9v9j27hz7l7nlp',
        '2147483646/A2147483646': 'bc1qgz7cjcqxuejyg0y9m9jalxvcas280shjmxtmmw',
        '2147483646/A45656668': 'bc1qc39gwwhzhgzt0h2nc2wr5lhuppq2vxgyu8cmar',
        '8974594/A0': 'bc1qtr86sdlcnsp2flwjc989ypd6su2jp08ve7448t',
        '8974594/A2147483647': 'bc1qkf6fa2azdexczk3pfz5zutjp6rkz86kuvmhkl0',
        '8974594/A1': 'bc1q2pzvsafd0rh6j5eruvzpj4wafvatefgp8qql7f',
        '8974594/A2147483646': 'bc1qkkyn33nv8k6fszdk7j57nmksytysr7ef7awnxs',
        '8974594/A45656668': 'bc1qrxa8dnaut2ndwhrx3k0r2akpce0n9c0ftmj708',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Taproot"',
      params: {
        path: "m/86'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': 'bc1p8tus88p49vm2rac67k78lakuxsvdzervaagrgvskfrqckys7cm5swk0xj3',
        '0/A2147483647': 'bc1pcnpeqsq3pz3jkqz3vgxh9l6pqq6uqgxcxmnna3kqrcjwr6w0kyvqzlj7n3',
        '0/A1': 'bc1pq9lftrxwtrsdwj4nzg0zscywtj6tve6rz2g97xthg6fm6v20lvls0ka5ye',
        '0/A2147483646': 'bc1px3hu8tmak9f47h4njmuelqlw9tzyt0lpm0l2ffl2yag6989vw8ps8rlk0w',
        '0/A45656668': 'bc1puh2wuv3ek0jc8gqmg3m6kug9hum5t29ueyk2prfyvlwjl92l0juq03n3g0',
        '2147483647/A0': 'bc1pj4a9dqrj8edn9u0ykxknxjhtem9w32ew85wyfl8lf8ld2ntgz4asu4t4tg',
        '2147483647/A2147483647': 'bc1pt5jdrnjye56akmz2s25adgvtncnge736a6tst0qw469ms2wsf6wqtwwrd5',
        '2147483647/A1': 'bc1pkcu72ctqkzec26eq958hcv885hfclu8f9c63nmamw7ksz7l4zjaqhgmlqv',
        '2147483647/A2147483646': 'bc1pez3rkvykm2h5c9u04pa36yj3lekxdlhjq2f5wkqtp4mpq0uukxusdx3hlt',
        '2147483647/A45656668': 'bc1p34vh53vj2jun59tz466yhhvvpw4y088rew986sz69m6yr99n6cxqj9297x',
        '1/A0': 'bc1pamrkm6cen20kafvk4l75s6x63t4j0h5xg8ta75gulgh2lsgxrh4q9htkay',
        '1/A2147483647': 'bc1p6ve8ct0qgjfjlsu9dvkazc23xpcd29r2wz85tc44tylsmp8ytmfqh6ykck',
        '1/A1': 'bc1paxmv4ruj56n8n5232q2sxand6qdpe33qcy8duewmnrzk88h6c47q7ccjj7',
        '1/A2147483646': 'bc1pu4gfvwy67dggf4uaua946hzfuxrx0s8ulj4mk0q45az5pnzgyacs6gqzgz',
        '1/A45656668': 'bc1pak8p9ce5pfvs6pkmu9769vtn6rkhke537sdmgggpn6hyv9f2ahmqwwett8',
        '2147483646/A0': 'bc1pzuhdqdu0ycpjdjj08nxmlyxne4hwxrkxdwysk3cfmdk2yykal4fq3spcyz',
        '2147483646/A2147483647': 'bc1pfu0ullpkar6nlmph7x9edxttyrls3cngxwss6nerezvuhtq8hx8qn23z49',
        '2147483646/A1': 'bc1pw8n6y498vgrd0tn3zfyxsvmxn8tw9v5tzxl9mle97wlcad30cajq3gzpzd',
        '2147483646/A2147483646': 'bc1pr0jhs5wdgup5j5m3vjgj8vvwnvg99mewqwhap68e89774f9phu5s57wspk',
        '2147483646/A45656668': 'bc1p76vuf4np4cg3te85x2e54eg93y296agc048r593gxsvgyp7uukfsld9rx4',
        '8974594/A0': 'bc1psx6xh45z8gw2nnyldz7tczth4r6mm8fn3e49gdgskt9dzzvxdvqq4jjthk',
        '8974594/A2147483647': 'bc1p9v3hgve7txw9kpaw7g856qycmhs3qa0r3gal79d672umcj4kg5tsz4ctvt',
        '8974594/A1': 'bc1pn9t7vwuykffqjc33xf424den4nru9cx0mdzermtptkpzpxattxxqckfw53',
        '8974594/A2147483646': 'bc1pzkma5lnvpmldrz83azntang5lmwwu8eg9mvkl0qxmn3txd420w3sz7vxy2',
        '8974594/A45656668': 'bc1p0amc5zels95qez3k7cjlungv63x6294aqpdq03djxc4genxw4udsetahlr',
      },
    },
  ],
} as AddressTestCaseData;
