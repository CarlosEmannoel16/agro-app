import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/screens/@shared/theme/theme";
import { UserContextProvider } from "./src/context/UserContext";
import { AnimalContextProvider } from "./src/context/ListAnimalContext";
import { Home } from "./src/components/pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer
      style={{
        flex: 1,
        backgroundColor: theme.color.primary,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.color.primary,
        }}
      >
        <ThemeProvider theme={theme}>
          <UserContextProvider>
            <AnimalContextProvider>
              <Home />
            </AnimalContextProvider>
          </UserContextProvider>
          <StatusBar style="auto" />
        </ThemeProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
}
