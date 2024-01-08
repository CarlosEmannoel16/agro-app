import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { routes } from "../routes/Routes";
import { useContext, useState } from "react";
import { Login } from "./login/Login";
import { Subscribe } from "./Subscribe/Subscribe";
import { theme } from "./@shared/theme/theme";
import { UserContext } from "../context/UserContext";
import { Animal } from "./Animals/Animals";

export const Root = () => {
  const [inLogin, setInLogin] = useState(true);
  const Tab = createBottomTabNavigator();

  const { user } = useContext(UserContext);
  return (
    <>
      {user ? (
        <NavigationContainer>
          <Tab.Navigator screenOptions={stylesNavigation}>
            {routes.map((route, index) => {
              return (
                <Tab.Screen
                  key={index}
                  name={route.name}
                  component={route.component}
                  options={route.options}
                />
              );
            })}
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <>
          {inLogin ? (
            <Login setInLogin={setInLogin} inLogin={inLogin} />
          ) : (
            <Subscribe setInLogin={setInLogin} inLogin={inLogin} />
          )}
        </>
      )}
    </>
  );
};

const stylesNavigation = {
  headerShown: false,
  tabBarActiveTintColor: "#fff",
  tabBarInactiveTintColor: "#fff",
  tabBarStyle: {
    borderTopColor: "#00000080",
    backgroundColor: theme.color.primary,
    paddingBottom: 4,
    paddingTop: 8,
    height: 60,
  },
  tabBarLabelStyle: {
    fontSize: 14,
  },
};
