import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductionPerDayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="notes" multiline source="notes" />
        <NumberInput
          step={1}
          label="quantityProduced"
          source="quantityProduced"
        />
      </SimpleForm>
    </Edit>
  );
};
