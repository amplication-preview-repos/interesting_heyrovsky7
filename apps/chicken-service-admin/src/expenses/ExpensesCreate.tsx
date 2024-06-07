import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ExpensesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="expenseDate" source="expenseDate" />
        <TextInput label="expenseType" source="expenseType" />
        <TextInput label="notes" multiline source="notes" />
      </SimpleForm>
    </Create>
  );
};
