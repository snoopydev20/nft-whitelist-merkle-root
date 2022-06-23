const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const whitelistAddresses = ["0xc1Fc73728155C9Fc469C98edb01d4D404399c517"];

const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

const rootHash = merkleTree.getRoot();

console.log("Whitelist Merkle Tree\n", merkleTree.toString());
