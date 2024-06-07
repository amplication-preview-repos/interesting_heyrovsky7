import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="item" source="item" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <NumberInput
          step={1}
          label="quantityAvailable"
          source="quantityAvailable"
        />
      </SimpleForm>
    </Create>
  );
};
