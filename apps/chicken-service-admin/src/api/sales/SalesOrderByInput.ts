import { SortOrder } from "../../util/SortOrder";

export type SalesOrderByInput = {
  createdAt?: SortOrder;
  customerName?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  quantity?: SortOrder;
  revenue?: SortOrder;
  saleDate?: SortOrder;
  updatedAt?: SortOrder;
};
