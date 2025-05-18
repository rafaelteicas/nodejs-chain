import { ValidateBlock } from "@/domain/block/use-cases/validate-block";
import { Blockchain } from "../entities/blockchain";
import { Block } from "@/domain/block/entities/block";

export class ValidateBlockchain {
  constructor(
    private readonly blockchain: Blockchain,
    private readonly validateBlock: ValidateBlock
  ) {}

  execute(blockchain: Blockchain): boolean {
    for (let i = 0; i < blockchain.blocks.length; i++) {
      const currentBlock: Block | undefined = blockchain.blocks[i];
      const previousBlock: Block | undefined = blockchain.blocks[i - 1];

      return this.validateBlock.execute(currentBlock, previousBlock);
    }
    return true;
  }
}
