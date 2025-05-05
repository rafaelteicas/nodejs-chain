import { Block } from "../entities/block";

export interface GenerateBlockUseCase {
  execute: (previousHash: string, transactions: string[]) => Promise<Block>;
}
