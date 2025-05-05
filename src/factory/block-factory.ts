import { Block } from "../domain/block/entities/block";
import { BlockFactoryProtocol } from "../domain/block/protocols/block-factory-protocol";
import { CreateNewBlock } from "../domain/block/use-cases/create-new-block";
import { GetBlockHash } from "../domain/block/use-cases/get-block-hash";
import { Sha256 } from "../infra/crypto/sha256";

export class BlockFactory implements BlockFactoryProtocol {
  createNewBlock(): Block {
    const blockHasher = new GetBlockHash(new Sha256());

    return new CreateNewBlock(blockHasher).execute();
  }
}
