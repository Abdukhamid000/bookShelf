import React, { createContext, useState } from "react";
import { signUp } from "../axios";
import { UserInterface, ResponseInterface } from "../types/interfaces";
import { useNavigate } from "react-router-dom";

export interface AuthProviderInterface {
  user: ResponseInterface | null;
  registerUser: (user: UserInterface) => void;
  logout: () => void;
  locUser: ResponseInterface;
}

interface Props {
  children: React.ReactNode;
}

let locUser = {} as ResponseInterface;
const userInfo = localStorage.getItem("userInfo");
if (userInfo) {
  locUser = JSON.parse(userInfo);
}

export const AuthContext = createContext<AuthProviderInterface | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<ResponseInterface | null>(null);
  const [error, setError] = useState<string | undefined>();

  const navigate = useNavigate();

  const registerUser = async (inputValues: UserInterface) => {
    const res = await signUp(inputValues);
    if (typeof res === "string" || typeof res === "undefined") {
      setError(res);
    } else {
      localStorage.setItem("userInfo", JSON.stringify(res));

      setUser(res);
      navigate("/book");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, logout, locUser }}>
      {children}

      {error && <p> Something went Wrong!</p>}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
