import { GenerateHash } from "../../domain/crypto/use-cases/generate-hash";
import { createHash } from "crypto";

export class Sha256 implements GenerateHash {
  execute(data: string): string {
    const hash = createHash("sha256");
    return hash.update(data).digest("hex");
  }
}
