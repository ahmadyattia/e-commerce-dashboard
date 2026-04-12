import { Route, Routes } from "react-router";
import DashboardLayout from "./components/layout/DashboardLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}></Route>
    </Routes>
  );
};

export default App;
