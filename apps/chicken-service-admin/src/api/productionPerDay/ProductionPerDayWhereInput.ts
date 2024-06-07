import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductionPerDayWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  quantityProduced?: IntNullableFilter;
};
