import { User } from "@/types/user";
import { useState, createContext, useContext, ReactNode } from "react";
import { api } from "@/services/api";
import { useNavigate } from "react-router";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  // logout: () => Promise<void>;
  signup: (
    fName: string,
    lName: string,
    email: string,
    password: string,
    isAdmin: boolean,
  ) => Promise<void>;
  // deleteAccount: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    // setError(null);
    setLoading(true);

    try {
      await api.post("/auth/login", { email, password });
    } catch (err: any) {
      throw new Error(err.response.data?.error);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (
    fName: string,
    lName: string,
    email: string,
    password: string,
    isAdmin: boolean,
  ) => {
    // setError(null);
    setLoading(true);

    try {
      await api.post("/auth/signup", {
        fName,
        lName,
        email,
        password,
        isAdmin,
      });

      navigate("/dashboard/login");
    } catch (err: any) {
      throw new Error(err.response.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, user, setUser, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Context must be used within a provider.");

  return context;
};
