import { Pressable, Text, View } from "react-native";
import {
  AreaTitleAddAnimal,
  HeaderAddAnimalStyled,
  TitleAddAnimalStyled,
} from "./HeaderAnimal.styled";
import { FontAwesome5 } from "@expo/vector-icons";

export const HeaderAddAnimals = ({ setPage }) => {
  return (
    <HeaderAddAnimalStyled>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 20,
        }}
      >
        <Pressable onPress={() => setPage("LIST")}>
          <FontAwesome5 name="arrow-circle-left" size={32} color="#fff" />
        </Pressable>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Voltar
        </Text>
      </View>
      <AreaTitleAddAnimal>
        <TitleAddAnimalStyled>Adicionar Animal</TitleAddAnimalStyled>
      </AreaTitleAddAnimal>
    </HeaderAddAnimalStyled>
  );
};
