const GENESIS_DATA = require("../config");
const Block = require("../index");
const { expect } = require("jest");
describe("Block", () => {
  const timestamp = Date.now();
  const lastHash = "0x74384729383";
  const hash = "0x4534875928";
  const data = { sender: "0x843879238", receiver: "0x784732975", amount: 9485 };
  const block = new Block({ timestamp, lastHash, hash, data });

  it("has a timestamp, lasthash, hash and data", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe("genesis()", () => {
    const genesisBlock = Block.genesis();
    console.log("genesisBlock: ", genesisBlock);

    it("returns a block instance", () => {
      expect(genesisBlock instanceof Block).toEqual(true);
    });
    it("returns genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });
});
