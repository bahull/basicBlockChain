var SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timeStamp, data, previousHash) {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = "";
  }
  calculateHash() {
    this.hash = SHA256(
      this.index,
      this.timeStamp,
      this.previousHash,
      JSON.stringify(this.data)
    );
  }
}

class EthereumChain {
  constructor() {
    this.chain = [];
  }
  lastBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(item) {
    item.previousHash = lastBlock.hash || 0;
    this.chain.push(item);
  }
}
