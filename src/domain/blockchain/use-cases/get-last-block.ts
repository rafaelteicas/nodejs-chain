import { Block } from "@/domain";
import { Blockchain } from "../entities/blockchain";

export class GetLastBlock {
  constructor(private readonly blockchain: Blockchain) {}

  execute(): Block {
    return this.blockchain.blocks[this.blockchain.blocks.length - 1];
  }
}
