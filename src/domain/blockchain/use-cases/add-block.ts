import { Block, ValidateBlock } from "@/domain";
import { Blockchain } from "../entities/blockchain";
import { GetLastBlock } from "./get-last-block";

export class AddBlock {
  constructor(
    private readonly blockchain: Blockchain,
    private readonly validateBlock: ValidateBlock,
    private readonly getLastBlock: GetLastBlock
  ) {}

  execute(block: Block) {
    const lastBlock = this.getLastBlock.execute();

    const isValid = this.validateBlock.execute(block, lastBlock);

    if (!isValid) return;

    this.blockchain.blocks.push(block);
  }
}
