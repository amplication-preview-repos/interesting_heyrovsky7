import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const SalesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerName" source="customerName" />
        <TextField label="ID" source="id" />
        <TextField label="item" source="item" />
        <TextField label="quantity" source="quantity" />
        <TextField label="revenue" source="revenue" />
        <TextField label="saleDate" source="saleDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
