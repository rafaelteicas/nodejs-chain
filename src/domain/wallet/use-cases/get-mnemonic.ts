import { KeyGenerator } from "@/domain/crypto";

export class GetMnemonic {
  constructor(private readonly keyGenerator: KeyGenerator) {}

  execute(): string {
    return this.keyGenerator.generateMnemonic();
  }
}
