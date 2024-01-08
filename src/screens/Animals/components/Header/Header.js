import { Alert, Pressable, View } from "react-native";
import {
  AreaTitle,
  HeaderAnimalStyled,
  SearchAnimalStyled,
  TitleAnimalStyled,
} from "./header.style";
import { AntDesign } from "@expo/vector-icons";

import AnimalService from "../../../../services/animal/AnimalService";

export const HeaderAnimal = ({ setLoading, setAnimals, setPage }) => {
  let timeout = null;
  const searchAnimals = async (params) => {
    setLoading(true);
    if (!params) {
      const result = await AnimalService.getAll();
      setAnimals(result);
      setLoading(false);
    }

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(async () => {
      const result = await AnimalService.search(params);
      setAnimals(result);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <HeaderAnimalStyled>
        <AreaTitle>
          <TitleAnimalStyled>Meus Animais</TitleAnimalStyled>
        </AreaTitle>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            gap: 5,
          }}
        >
          <SearchAnimalStyled
            placeholder="Buscar Animal"
            onChange={async (e) => searchAnimals(e.nativeEvent.text)}
          />
          <Pressable onPress={() => setPage("ADD_ANIMAL")}>
            <AntDesign name="plussquare" size={50} color="#fff" />
          </Pressable>
        </View>
      </HeaderAnimalStyled>
    </>
  );
};
