import {
  GenerateKeyPairFromMnemonic,
  GetMnemonic,
  KeyGenerator,
  KeyPair,
  WalletFactoryProtocol,
} from "@/domain";
import { HDWallet } from "@/infra";

export class WalletFactory implements WalletFactoryProtocol {
  keyGenerator: KeyGenerator;

  constructor() {
    this.keyGenerator = new HDWallet();
  }

  getMnemonic(): string {
    return new GetMnemonic(this.keyGenerator).execute();
  }

  generateKeyPair(mnemonic: string): KeyPair {
    return new GenerateKeyPairFromMnemonic(this.keyGenerator).execute(mnemonic);
  }
}
