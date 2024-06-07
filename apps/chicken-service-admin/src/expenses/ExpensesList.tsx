import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExpensesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExpensesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expenseDate" source="expenseDate" />
        <TextField label="expenseType" source="expenseType" />
        <TextField label="ID" source="id" />
        <TextField label="notes" source="notes" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
