import { createContext, useState } from "react";
import React from "react";

export const authContext = createContext({
  user: {},
});

const AuthState = (props) => {
  const [user, setUser] = useState({});

  return (
    <authContext.Provider value={{ user, setUser }}>
      {props.children   }
    </authContext.Provider>
  );
};

export default AuthState;
