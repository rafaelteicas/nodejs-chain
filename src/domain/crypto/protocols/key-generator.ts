export type KeyPair = {
  publicKey: string;
  privateKey: string;
};

export interface KeyGenerator {
  generateMnemonic(): string;
  getPrivateKeyFromMnemonic(mnemonic: string): KeyPair;
}
