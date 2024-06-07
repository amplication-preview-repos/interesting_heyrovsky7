import { SortOrder } from "../../util/SortOrder";

export type ProductionPerDayOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  quantityProduced?: SortOrder;
  updatedAt?: SortOrder;
};
