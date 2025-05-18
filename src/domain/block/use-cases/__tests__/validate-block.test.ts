import { Block } from "../../entities/block";
import { BlockHeader } from "../../entities/block-header";
import { ValidateBlock } from "../validate-block";

const genesisBlock: Block = {
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

const makeBlock = (
  header: Partial<BlockHeader> | undefined = undefined,
  data: string | undefined = undefined
): Block => ({
  header: {
    ...header,
    hash: "",
    previousHash: "",
    timestamp: Date.now(),
    height: 1,
    nonce: 0,
    target: 0,
  },
  data: data || "",
});

const makeSut = () => {
  const sut = new ValidateBlock();

  return { sut };
};

describe("ValidateBlock Use Case", () => {
  it("should return true if is genesis block", () => {
    const { sut } = makeSut();

    const isValid = sut.execute(genesisBlock);

    expect(isValid).toBeTruthy();
  });

  it("should return false if block hash is empty", () => {
    const { sut } = makeSut();
    const block = makeBlock({
      hash: "",
    });

    const isValid = sut.execute(block, genesisBlock);

    expect(isValid).toBeFalsy();
  });

  it("should return false if block hash is different from 64 characters", () => {
    const { sut } = makeSut();
    const block = makeBlock({
      previousHash:
        "1234567890123456789012345678901234567890123456789012345678901234",
    });

    const isValid = sut.execute(block, genesisBlock);

    expect(isValid).toBeFalsy();
  });

  it("should return false if block previousHash is empty", () => {
    const { sut } = makeSut();
    const block = makeBlock({
      previousHash: "",
    });

    const isValid = sut.execute(block, genesisBlock);

    expect(isValid).toBeFalsy();
  });

  it("should return false if block previousHash is different from 64 characters", () => {
    const { sut } = makeSut();
    const block = makeBlock({
      previousHash:
        "1234567890123456789012345678901234567890123456789012345678901234",
    });

    const isValid = sut.execute(block, genesisBlock);

    expect(isValid).toBeFalsy();
  });

  it("should return false if current block previousHash is different from previous block hash", () => {
    const { sut } = makeSut();
    const block = makeBlock({
      hash: "abc",
      previousHash: "other previous hash",
    });

    const isValid = sut.execute(block, genesisBlock);

    expect(isValid).toBeFalsy();
  });
});
