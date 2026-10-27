import { useAuth } from "@/context/AuthContext";
import Login from "@/pages/dashboard/Login";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  if (!user) return <Login />;

  return <>{children}</>;
};

export default ProtectedRoute;
