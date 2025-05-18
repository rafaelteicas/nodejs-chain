import { ValidateBlockchain } from "../validate-blockchain";
import { Blockchain } from "../../entities/blockchain";
import { ValidateBlock } from "../../../block/use-cases/validate-block";
import { Block } from "@/domain/block/entities/block";

const genesisBlock = {
  header: {
    hash: "genesisHash",
    previousHash: "",
    timestamp: Date.now(),
    height: 0,
    nonce: 0,
    target: 0,
  },
  data: "",
};

const mockedBlockchain: Blockchain = {
  blocks: [genesisBlock],
};

class MockedValidateBlock implements ValidateBlock {
  execute(currentBlock: Block, previousBlock?: Block): boolean {
    return true;
  }
}

const makeSut = () => {
  const mockedValidateBlock = new MockedValidateBlock();
  const sut = new ValidateBlockchain(mockedBlockchain, mockedValidateBlock);

  return {
    sut,
    mockedValidateBlock,
  };
};

describe("Validate Blockchain Use Case", () => {
  it("should return true if blockchain is valid", () => {
    const { sut } = makeSut();

    const isValid = sut.execute(mockedBlockchain);

    expect(isValid).toBeTruthy();
  });

  it("should return false if block is invalid", () => {
    const { sut, mockedValidateBlock } = makeSut();

    jest.spyOn(mockedValidateBlock, "execute").mockReturnValueOnce(false);

    const isValid = sut.execute(mockedBlockchain);

    expect(isValid).toBeFalsy();
  });
});
