import { ImageBackground, Text, View } from "react-native";
import {
  ButtonMore,
  CardAnimalStyled,
  TextCodCardStyled,
} from "./cardAnimal.style";
import { useContext } from "react";
import { AnimalContext } from "../../../../context/ListAnimalContext";
import { useNavigation } from "@react-navigation/native";

export const CardAnimal = ({ value, setPage, imageUrl, cod, animal }) => {
  const { setCurrentAnimal } = useContext(AnimalContext);
  const navigation = useNavigation();
  return (
    <CardAnimalStyled
      onPress={() => {
        setCurrentAnimal({
          ...animal,
        });
        setPage("DETAILS_ANIMAL");
      }}
    >
      <ImageBackground
        src={imageUrl}
        style={{
          width: 100,
          height: "100%",
          marginRight: 10,
        }}
        borderRadius={10}
      ></ImageBackground>
      <View>
        <Text>{animal.name}</Text>
        <TextCodCardStyled>#{cod}</TextCodCardStyled>
      </View>
    </CardAnimalStyled>
  );
};
