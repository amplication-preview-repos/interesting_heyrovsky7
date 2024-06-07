import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchasesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="cost" source="cost" />
        <TextInput label="item" source="item" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="supplierName" source="supplierName" />
      </SimpleForm>
    </Create>
  );
};
