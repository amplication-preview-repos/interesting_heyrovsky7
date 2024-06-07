import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  lastUpdated?: SortOrder;
  quantityAvailable?: SortOrder;
  updatedAt?: SortOrder;
};
