// interceptor for requests that return status 401 (unauthorized)
// logs the user out

import React, { useEffect, useRef } from "react";
import { api } from "@/services/api";
import { useAuth } from "@/context/AuthContext";

let isLoggingOut = false; // to prevent multiple logout on multiple subsequent 401 responses

export function AxiosInterceptorBridge({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();

  // Put the action function into a mutable ref container
  // use ref because without it there's a stale closure issue
  const logoutRef = useRef(logout);
  const userRef = useRef(user);

  // Keep the ref updated with the logout hook on every render
  logoutRef.current = logout;
  userRef.current = user;
  useEffect(() => {}, []);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        // log out on intercepting status 401
        if (error.response?.status === 401 && !isLoggingOut) {
          if (userRef.current) {
            // log out and alert only once
            isLoggingOut = true;

            await logoutRef.current();
            alert("Your session has expired.");

            // reset the flag after the logout
            isLoggingOut = false;
          }
        }
        return Promise.reject(error);
      },
    );

    // Clean up interceptor if this component unmounts
    return () => api.interceptors.response.eject(interceptor);
  }, []);

  return <>{children}</>;
}
