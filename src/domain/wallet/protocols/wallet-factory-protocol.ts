import { KeyPair } from "@/domain/crypto";

export interface WalletFactoryProtocol {
  getMnemonic(): string;
  generateKeyPair(mnemonic: string): KeyPair;
}
