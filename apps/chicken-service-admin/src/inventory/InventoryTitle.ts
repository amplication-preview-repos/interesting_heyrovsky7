import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "item";

export const InventoryTitle = (record: TInventory): string => {
  return record.item?.toString() || String(record.id);
};
