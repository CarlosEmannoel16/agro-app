import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const getUser = async () => {
    if (!user)
      return AsyncStorage.getItem("user").then((response) => {
        if (response) {
          return JSON.parse(response);
        }
      });

    return user;
  };
  const changeUser = (user) => {
    AsyncStorage.setItem("user", JSON.stringify(user)).then(() => {
      setUser(response);
    });
  };

  useEffect(() => {
    if (!user)
      getUser().then((response) => {
        if (response) {
          setUser(response);
        }
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, getUser, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};
