require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food champion recipe nominee combine junior light army gauge'; 
let testAccounts = [
"0xac17324acad2b70a6d4a9b1015d5993696d49bce24911542b946ea1769b94c67",
"0x218de95d646d140b57e224dc0d206e0be362641ea4b93f8683ee2a0ebf2abf67",
"0x1962ca7dfc62284a0e633b0e1c2b76298e0027449455d0c1114e991bc20d3068",
"0xd4e871e3be5af37b3d4037a09039ec1175e2b09bbce30e1208cfa3557e7fae6a",
"0x1e0fcda8206eb87c805ec50103360cf2262a625f9a19924116257981432c3d9a",
"0x7de054faf188e5dac6843e77aadabf36cbdccffead842d2b452cf8e9d6a27045",
"0xec3458345eee55dfc8d61f70496045f30db07abd8d3f49c1ab27294e15e85930",
"0x4b5e79f50413e5f8518ae2f0c3d97fc3c30c69be0e9372c50e2f85c03f25a95f",
"0x0e4c44ee5ce745772e056cd267fbf918cb7bd84f0596c0a64c9cf9ff3853a23e",
"0x3e2a6aab8e79c007ba46ffad1878cd6294ccac02e42b11937481f0f5a2877650"
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
            gas: 8000000,
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


