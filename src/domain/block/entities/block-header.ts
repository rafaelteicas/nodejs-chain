export type BlockHeader = {
  hash: string;
  previousHash: string;
  timestamp: number;
  height: number;
  nonce: number;
  target: number;
};
