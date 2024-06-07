import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SalesWhereInput = {
  customerName?: StringNullableFilter;
  id?: StringFilter;
  item?: StringNullableFilter;
  quantity?: IntNullableFilter;
  revenue?: FloatNullableFilter;
  saleDate?: DateTimeNullableFilter;
};
