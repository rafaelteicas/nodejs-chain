import { GetMnemonic } from "../..";
import { KeyGenerator, KeyPair } from "@/domain/crypto";

class MockedGenerateMnemonic implements KeyGenerator {
  generateMnemonic(): string {
    return "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";
  }

  getPrivateKeyFromMnemonic(mnemonic: string): KeyPair {
    throw new Error("Method not implemented.");
  }
}

const makeSut = () => {
  const generateMnemonic = new MockedGenerateMnemonic();
  return new GetMnemonic(generateMnemonic);
};

describe("GetMnemonic Use Case", () => {
  it("should return a mnemonic phrase", () => {
    const sut = makeSut();
    const mnemonic = sut.execute();
    expect(mnemonic).toBe(
      "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about"
    );
  });
});
