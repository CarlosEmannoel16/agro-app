import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/screens/@shared/theme/theme";
import { Root } from "./src/screens";
import { UserContextProvider } from "./src/context/UserContext";
import { AnimalContextProvider } from "./src/context/ListAnimalContext";
import { Home } from "./src/components/pages/Home";

export default function App() {
  return (
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
  );
}
