"use client";

import Loading from "@/_components/ui/loading/Loading";
import { Box } from "@mui/material";
import * as React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ContextProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
}

const AuthContext = createContext<ContextProps | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getTokenFromLocalStorge = () => {
      setLoading(true);
      try {
        const tokenString = localStorage.getItem("token");
        const token = tokenString ? JSON.parse(tokenString) : null;
        if (token) {
          setToken(token.access);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getTokenFromLocalStorge();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  if (loading) {
    return (
      <>
        <Box className="w-full h-full">
          <Box className="flex items-center justify-center h-screen">
            <Loading />
          </Box>
        </Box>
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{ token, handleLogout, setToken, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
