import { BlockHeader } from "./block-header";

export type Block = {
  header: BlockHeader;
  data: string[];
};
