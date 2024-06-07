import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PurchasesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="cost" source="cost" />
        <TextInput label="item" source="item" />
        <DateTimeInput label="purchaseDate" source="purchaseDate" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="supplierName" source="supplierName" />
      </SimpleForm>
    </Edit>
  );
};
