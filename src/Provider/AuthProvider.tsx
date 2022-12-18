import React, { createContext, useState } from "react";
import { signUp } from "../axios";
import { UserInterface, ResponseInterface } from "../types/interfaces";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../components/CustomAlert";

export interface AuthProviderInterface {
  user: ResponseInterface | null;
  registerUser: (user: UserInterface) => void;
  logout: () => void;
}

interface Props {
  children: React.ReactNode;
}

const host = "https://no23.lavina.tech";

export const AuthContext = createContext<AuthProviderInterface | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<ResponseInterface | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const navigate = useNavigate();

  const registerUser = async (inputValues: UserInterface) => {
    const res = await signUp(inputValues);
    if (typeof res === "string" || typeof res === "undefined") {
      setError(res);
    } else {
      localStorage.setItem("userInfo", JSON.stringify(res));
      setIsAlert(true);
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
    <AuthContext.Provider value={{ user, registerUser, logout }}>
      {children}
      {isAlert && <CustomAlert text="Successfully created" status="success" />}
      {error && <p> Something went Wrong!</p>}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
