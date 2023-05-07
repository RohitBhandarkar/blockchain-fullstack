class Block {
  constructor(data, hash, lastHash) {
    this.data = data;
    this.hash = hash;
    this.lastHash = lastHash;
  }
}

const hash = (data) => {
  return data + "1";
};

class Blockchain {
  constructor() {
    const genesisBlock = new Block("Genesis", "block0", "None");
    this.chain = [genesisBlock];
  }

  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash;
    const newHash = hash(lastHash);
    const newBlock = new Block(data, newHash, lastHash);
    this.chain.push(newBlock);
  }
}

const foo = new Blockchain();
foo.addBlock("first");
foo.addBlock("second");
foo.addBlock("third");
foo.addBlock("fourth");
console.log(foo.chain);
