import { GenerateHash } from "@/domain/crypto";
import { BlockHeader } from "../entities/block-header";

export class GetBlockHash {
  constructor(private readonly generateHash: GenerateHash) {}

  execute(blockHeader: BlockHeader): string {
    return this.generateHash.execute(JSON.stringify(blockHeader));
  }
}
