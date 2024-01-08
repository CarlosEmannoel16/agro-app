import { Home } from "../screens/home/Home";
import { Animal } from "../screens/Animals/Animals";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export const routes = [
  {
    name: "Home",
    component: Home,
    options: {
      title: "Inicio",
      tabBarIcon: () => {
        return <Ionicons name="home" size={24} color="white" />;
      },
    },
  },
  {
    name: "Ox",
    component: Animal,
    options: {
      title: "Animais",
      tabBarIcon: () => {
        return <MaterialCommunityIcons name="cow" size={24} color="#fff" />;
      },
    },
  },
];
