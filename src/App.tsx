import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllCustomersPage from "../pages/customers";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";
import ProductsPage from "../pages/products";
import AllOrdersPage from "../pages/orders";
import OverviewPage from "../pages/overview";
import CataloguesPage from "../pages/catalogues";
import PrivateRoute from "./components/core/PrivateRoute";
import LayoutWrapper from "./components/layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          element={
            <LayoutWrapper>
              <PrivateRoute />
            </LayoutWrapper>
          }
        >
          <Route path="/" element={<OverviewPage />} />
          <Route path="/orders" element={<AllOrdersPage />} />
          <Route path="/customers" element={<AllCustomersPage />} />
          <Route path="/catalogues" element={<CataloguesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
