import { SortOrder } from "../../util/SortOrder";

export type ExpensesOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  expenseDate?: SortOrder;
  expenseType?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
};
