import { PurchasesWhereInput } from "./PurchasesWhereInput";
import { PurchasesOrderByInput } from "./PurchasesOrderByInput";

export type PurchasesFindManyArgs = {
  where?: PurchasesWhereInput;
  orderBy?: Array<PurchasesOrderByInput>;
  skip?: number;
  take?: number;
};
