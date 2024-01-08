import { Pressable, ScrollView, Text, View } from "react-native";
import {
  BodyAddAnimalStyled,
  ContainerAnimalStyled,
  DividerStyled,
  HeaderAnimalStyled,
  InternHeaderAnimalStyled,
  ItemOptionAreaStyled,
  NameAnimalAreaStyled,
  OptionsAreaStyled,
  TextAnimalStyled,
} from "./Animal.styled";
import { FontAwesome5 } from "@expo/vector-icons";
import { MenuHorizontal } from "../@shared/MenuHorizontal/MenuHorizontal";
import { DetailsAnimalSubScreen } from "./SubScreens/DetailsAnimal";
import { useContext, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AnimalContext } from "../../context/ListAnimalContext";
import config from "../../config/Urls";
import { HistoryWeightAnimalSubScreen } from "./SubScreens/HistoryWeight";
import { AddWeight } from "./modals/AddWeight";
export const AnimalScreen = ({ setPage }) => {
  const { currentAnimal } = useContext(AnimalContext);
  const [currentSbScreen, setCurrentSbScreen] = useState(0);
  return (
    <ContainerAnimalStyled>
      <HeaderAnimalStyled>
        <InternHeaderAnimalStyled
          imageStyle={{
            borderRadius: 15,
            width: "100%",
            height: "100%",
          }}
          src={
            !!currentAnimal?.image[0]
              ? `${config.API_URL}/images/${currentAnimal?.image[0]}`
              : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
          }
        >
          <Pressable onPress={() => setPage("LIST")}>
            <FontAwesome5 name="arrow-circle-left" size={32} color="#fff" />
          </Pressable>
        </InternHeaderAnimalStyled>
      </HeaderAnimalStyled>
      <BodyAddAnimalStyled>
        <NameAnimalAreaStyled>
          <TextAnimalStyled>{currentAnimal?.name || ""}</TextAnimalStyled>
        </NameAnimalAreaStyled>
        <OptionsAreaStyled>
          <AddWeight animalId={currentAnimal.id} />

          <ItemOptionAreaStyled>
            <MaterialCommunityIcons name="image-plus" size={32} color="#fff" />
            <Text style={{ textAlign: "center", color: "#fff" }}>
              Adicionar Imagem
            </Text>
          </ItemOptionAreaStyled>
          <ItemOptionAreaStyled>
            <MaterialIcons name="add-circle" size={32} color="#fff" />
            <Text style={{ textAlign: "center", color: "#fff" }}>
              Produção leiteira
            </Text>
          </ItemOptionAreaStyled>
        </OptionsAreaStyled>

        <MenuHorizontal
          currentSbScreen={currentSbScreen}
          setCurrentSbScreen={setCurrentSbScreen}
        />
        <ScrollView>
          {currentSbScreen === 0 ? (
            <DetailsAnimalSubScreen animal={currentAnimal} />
          ) : currentSbScreen === 1 ? (
            <HistoryWeightAnimalSubScreen animal={currentAnimal} />
          ) : null}
        </ScrollView>
      </BodyAddAnimalStyled>
    </ContainerAnimalStyled>
  );
};
