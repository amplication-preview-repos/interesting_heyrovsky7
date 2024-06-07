import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const SalesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customerName" source="customerName" />
        <TextInput label="item" source="item" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="revenue" source="revenue" />
        <DateTimeInput label="saleDate" source="saleDate" />
      </SimpleForm>
    </Create>
  );
};
