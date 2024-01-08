import { ImageBackground, Text, View } from "react-native";
import { CardHomeStyled, TextValueCardStyled } from "./cardHome.style";

export const CardHome = ({ name, value, icon, src }) => {
  return (
    <CardHomeStyled src={src}>
      <View>
        <Text style={{ color: "#fff" }}>{name}</Text>
      </View>

      <TextValueCardStyled>{value}</TextValueCardStyled>
    </CardHomeStyled>
  );
};
