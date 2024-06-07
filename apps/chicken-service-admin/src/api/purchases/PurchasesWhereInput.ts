import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PurchasesWhereInput = {
  cost?: FloatNullableFilter;
  id?: StringFilter;
  item?: StringNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  supplierName?: StringNullableFilter;
};
