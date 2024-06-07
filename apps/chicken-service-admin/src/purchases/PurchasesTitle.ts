import { Purchases as TPurchases } from "../api/purchases/Purchases";

export const PURCHASES_TITLE_FIELD = "supplierName";

export const PurchasesTitle = (record: TPurchases): string => {
  return record.supplierName?.toString() || String(record.id);
};
