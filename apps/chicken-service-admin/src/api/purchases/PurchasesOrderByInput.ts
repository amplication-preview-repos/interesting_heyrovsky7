import { SortOrder } from "../../util/SortOrder";

export type PurchasesOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  purchaseDate?: SortOrder;
  quantity?: SortOrder;
  supplierName?: SortOrder;
  updatedAt?: SortOrder;
};
