import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SalesList } from "./sales/SalesList";
import { SalesCreate } from "./sales/SalesCreate";
import { SalesEdit } from "./sales/SalesEdit";
import { SalesShow } from "./sales/SalesShow";
import { PurchasesList } from "./purchases/PurchasesList";
import { PurchasesCreate } from "./purchases/PurchasesCreate";
import { PurchasesEdit } from "./purchases/PurchasesEdit";
import { PurchasesShow } from "./purchases/PurchasesShow";
import { ProductionPerDayList } from "./productionPerDay/ProductionPerDayList";
import { ProductionPerDayCreate } from "./productionPerDay/ProductionPerDayCreate";
import { ProductionPerDayEdit } from "./productionPerDay/ProductionPerDayEdit";
import { ProductionPerDayShow } from "./productionPerDay/ProductionPerDayShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { ExpensesList } from "./expenses/ExpensesList";
import { ExpensesCreate } from "./expenses/ExpensesCreate";
import { ExpensesEdit } from "./expenses/ExpensesEdit";
import { ExpensesShow } from "./expenses/ExpensesShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ChickenService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sales"
          list={SalesList}
          edit={SalesEdit}
          create={SalesCreate}
          show={SalesShow}
        />
        <Resource
          name="Purchases"
          list={PurchasesList}
          edit={PurchasesEdit}
          create={PurchasesCreate}
          show={PurchasesShow}
        />
        <Resource
          name="ProductionPerDay"
          list={ProductionPerDayList}
          edit={ProductionPerDayEdit}
          create={ProductionPerDayCreate}
          show={ProductionPerDayShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Expenses"
          list={ExpensesList}
          edit={ExpensesEdit}
          create={ExpensesCreate}
          show={ExpensesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
