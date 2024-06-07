import { ProductionPerDay as TProductionPerDay } from "../api/productionPerDay/ProductionPerDay";

export const PRODUCTIONPERDAY_TITLE_FIELD = "id";

export const ProductionPerDayTitle = (record: TProductionPerDay): string => {
  return record.id?.toString() || String(record.id);
};
