import { Route, Routes } from "react-router";
import DashboardLayout from "./components/layout/DashboardLayout";
import Overview from "./pages/dashboard/Overview";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Overview />} />
      </Route>
    </Routes>
  );
};

export default App;
