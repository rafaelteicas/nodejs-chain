import { Block } from "../entities/block";
import { BlockHeader } from "../entities/block-header";
import { GetBlockHash } from "./get-block-hash";

export class CreateNewBlock {
  constructor(private readonly getBlockHash: GetBlockHash) {}

  execute(): Block {
    const header: BlockHeader = {
      hash: "",
      previousHash: "",
      timestamp: Date.now(),
      height: 0,
      nonce: 0,
      target: 0,
    };

    const hash = this.getBlockHash.execute(header);

    return {
      header: {
        ...header,
        hash: hash,
      },
      data: "",
    };
  }
}
