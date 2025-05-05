import { Block } from "../entities/block";
import { BlockHeader } from "../entities/block-header";

export interface BlockFactoryProtocol {
  createNewBlock(): Block;
}
