import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="item" source="item" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <NumberInput
          step={1}
          label="quantityAvailable"
          source="quantityAvailable"
        />
      </SimpleForm>
    </Edit>
  );
};
