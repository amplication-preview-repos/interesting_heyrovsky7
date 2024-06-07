import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExpensesWhereInput = {
  amount?: FloatNullableFilter;
  expenseDate?: DateTimeNullableFilter;
  expenseType?: StringNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
};
