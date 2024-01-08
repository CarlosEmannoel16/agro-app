import { Text } from "react-native";
import { CardSmallExternalStyled, CardSmallStyled } from "./cardSmall.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CardSmall = ({ name, icon }) => {
  return (
    <CardSmallExternalStyled>
      <CardSmallStyled>
        <Text>{icon}</Text>
      </CardSmallStyled>
      <Text style={{ fontSize: 10, textAlign: "center" }}>{name}</Text>
    </CardSmallExternalStyled>
  );
};
