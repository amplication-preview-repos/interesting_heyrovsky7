import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ExpensesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="expenseDate" source="expenseDate" />
        <TextInput label="expenseType" source="expenseType" />
        <TextInput label="notes" multiline source="notes" />
      </SimpleForm>
    </Edit>
  );
};
