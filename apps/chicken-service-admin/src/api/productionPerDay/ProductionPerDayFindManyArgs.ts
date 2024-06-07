import { ProductionPerDayWhereInput } from "./ProductionPerDayWhereInput";
import { ProductionPerDayOrderByInput } from "./ProductionPerDayOrderByInput";

export type ProductionPerDayFindManyArgs = {
  where?: ProductionPerDayWhereInput;
  orderBy?: Array<ProductionPerDayOrderByInput>;
  skip?: number;
  take?: number;
};
