import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

import { Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import { AuthContext } from "./Provider/AuthProvider";

const user = localStorage.getItem("userInfo");
let userInfo = "";
if (user) {
  userInfo = JSON.parse(user);
}

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <Navbar userInfo={userInfo} />
      <Routes>
        <Route path="/" element={<SignUp />} />
        {(authCtx?.user || userInfo) && "asd"}
        <Route path="book" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;
