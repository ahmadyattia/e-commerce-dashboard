import { Navigate, Route, Routes } from "react-router";
import DashboardLayout from "./components/layout/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Products from "./pages/dashboard/Products";
import Orders from "./pages/dashboard/Orders";
import Users from "./pages/dashboard/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />}></Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="overview" replace />}></Route>
        /* default dashboard page */
        <Route path="overview" element={<Overview />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default App;
