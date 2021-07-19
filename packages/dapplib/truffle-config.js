require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind modify include enter bottom tortoise'; 
let testAccounts = [
"0xff8775f4882dc09d279d13575cf387c270eb03b8eac713d6f42ce181f64c81b5",
"0xb2a2a241c1a09e012210781be5343214b946633996fb7c45c72fdeaaf624f50f",
"0x15601d71e9eddd907029b46ec9a4a4080a41a72253115be280a943958a022180",
"0x2d7219ff588b1869a997a6ca0a0ad3be33fd1737e0f991f5ae05aab08e4a7d87",
"0xe7a6d48a3c3e41d61f49dc8cb7bf27b98df8664d97fd7ebc9d166fe4fe31aa28",
"0xc17083ccd67e4865a1479195ee86cbb2dab2f123cd20f416a33182d721cff5e1",
"0x8ed632b69eeef2209cf087c58a4dd64a0823553dba69783032a5615d5f035037",
"0x27c5b14072271e4ca410ce6498a6925b74289dd375a2be0078926c3e657d612c",
"0xf517994d20c757c47db850138fb0dfdd9ce91f366ebb3dcd9a7583353af7cd12",
"0x4f013a70b6b3d55bbc444de97dcba2253ef780f5615f82c37e7359f25ad531b8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


