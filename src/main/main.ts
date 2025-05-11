import "module-alias/register";

import { WalletFactory } from "@/factory";

const wallet = new WalletFactory();

console.log(
  wallet.generateKeyPair(
    "abandon ability able about above absent absorb abstract absurd abuse access accident acclaim acoustic acquire across act action actor actress actual adapt add addict address adjust admit adult advance"
  )
);
