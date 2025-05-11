import { KeyGenerator, KeyPair } from "@/domain/crypto";

export class GenerateKeyPairFromMnemonic {
  constructor(private readonly keyGenerator: KeyGenerator) {}

  execute(mnemonic: string): KeyPair {
    const keyPair = this.keyGenerator.getPrivateKeyFromMnemonic(mnemonic);

    return keyPair;
  }
}
