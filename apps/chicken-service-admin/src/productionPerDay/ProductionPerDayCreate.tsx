import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductionPerDayCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="notes" multiline source="notes" />
        <NumberInput
          step={1}
          label="quantityProduced"
          source="quantityProduced"
        />
      </SimpleForm>
    </Create>
  );
};
