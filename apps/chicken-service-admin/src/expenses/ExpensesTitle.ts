import { Expenses as TExpenses } from "../api/expenses/Expenses";

export const EXPENSES_TITLE_FIELD = "expenseType";

export const ExpensesTitle = (record: TExpenses): string => {
  return record.expenseType?.toString() || String(record.id);
};
