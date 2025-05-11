import { GenerateHash } from "@/domain";
import { createHash } from "crypto";

export class Sha256 implements GenerateHash {
  execute(data: string): string {
    const hash = createHash("sha256");
    return hash.update(data).digest("hex");
  }
}
