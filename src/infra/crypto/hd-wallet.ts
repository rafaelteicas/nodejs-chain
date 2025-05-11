import { DEFAULT_DERIVATION_PATH, KeyGenerator, KeyPair } from "@/domain";
import BIP32Factory from "bip32";
import * as bip39 from "bip39";
import * as ecc from "tiny-secp256k1";

export class HDWallet implements KeyGenerator {
  generateMnemonic(): string {
    const mnemonic = bip39.generateMnemonic(256);
    return mnemonic;
  }
  getPrivateKeyFromMnemonic(mnemonic: string): KeyPair {
    const bip32 = BIP32Factory(ecc);
    const node = bip32.fromSeed(bip39.mnemonicToSeedSync(mnemonic));
    const child = node.derivePath(DEFAULT_DERIVATION_PATH);

    if (!child.privateKey) throw new Error("Private key not found");

    return {
      privateKey: child.privateKey.toString(),
      publicKey: child.publicKey.toString(),
    };
  }
}
