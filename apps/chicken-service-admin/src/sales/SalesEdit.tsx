import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const SalesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="customerName" source="customerName" />
        <TextInput label="item" source="item" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="revenue" source="revenue" />
        <DateTimeInput label="saleDate" source="saleDate" />
      </SimpleForm>
    </Edit>
  );
};
