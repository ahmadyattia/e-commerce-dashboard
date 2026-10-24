import { User } from "@/types/user";
import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { api } from "@/services/api";
import { useNavigate } from "react-router";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
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
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // verify the session on reload
  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await api.get("/auth/me");

        setUser(response.data.user);
        setCsrfToken(response.data.csrfToken);
      } catch (err) {
        setUser(null);
        setCsrfToken(null);
      }
    };

    verifySession();
  }, []);

  useEffect(() => {
    // run this interceptor on every state-changing request to inject the csrf token to the request headers
    const interceptor = api.interceptors.request.use(
      (config) => {
        const method = config.method?.toLowerCase();

        // only attach csrf token header to state-changing requests
        if (
          csrfToken &&
          method &&
          ["post", "put", "delete", "patch"].includes(method)
        ) {
          config.headers["X-CSRF-TOKEN"] = csrfToken;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    // Eject on cleanup/re-render to prevent duplicate interceptors accumulating
    return () => api.interceptors.request.eject(interceptor);
  }, [csrfToken]);

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });

      setUser(response.data.user);
      setCsrfToken(response.data.csrfToken);
      navigate("/dashboard");
    } catch (err: any) {
      setUser(null);
      setCsrfToken(null);
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

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setUser(null);
      setCsrfToken(null);
      navigate("/dashboard/login", { replace: true });
    }
  };

  return (
    <AuthContext.Provider
      value={{ loading, user, setUser, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Context must be used within a provider.");

  return context;
};
