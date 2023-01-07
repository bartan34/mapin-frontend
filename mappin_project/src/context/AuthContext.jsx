import React, { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(
    localStorage.getItem("user") ? true : false
  );

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const handleLogin = async () => {
    const token = await fakeAuth();
    if (token) {
      localStorage.setItem("user", JSON.stringify(token));
      setAuth(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth(false);
  };

  const values = {
    auth,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
