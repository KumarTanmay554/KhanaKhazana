import { createContext, useState } from "react";
import React from "react";

export const AuthContext = createContext({
  user: {},
  setUser: (data) => {},
});

const AuthState = (props) => {
  const [user, setUser] = useState({
    aditya: "name",
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
