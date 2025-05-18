import { Block } from "../entities/block";

export class ValidateBlock {
  execute(currentBlock: Block, previousBlock?: Block): boolean {
    if (currentBlock.header.height === 0) {
      return true;
    }

    if (currentBlock.header.height > 0) {
      if (!previousBlock) {
        return false;
      }

      if (currentBlock.header.height !== previousBlock.header.height + 1) {
        return false;
      }

      if (previousBlock.header.hash !== currentBlock.header.previousHash) {
        return false;
      }

      if (
        !currentBlock.header.hash ||
        currentBlock.header.hash.length === 0 ||
        currentBlock.header.hash.length > 64
      ) {
        return false;
      }

      if (
        !currentBlock.header.previousHash ||
        currentBlock.header.previousHash.length === 0 ||
        currentBlock.header.previousHash.length > 64
      ) {
        return false;
      }
    }

    return true;
  }
}
