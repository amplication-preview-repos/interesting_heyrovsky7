import { Sales as TSales } from "../api/sales/Sales";

export const SALES_TITLE_FIELD = "customerName";

export const SalesTitle = (record: TSales): string => {
  return record.customerName?.toString() || String(record.id);
};
