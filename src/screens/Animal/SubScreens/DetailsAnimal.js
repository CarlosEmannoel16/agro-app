import { Text, View } from "react-native";
import {
  ContainerDetailsAnimalStyled,
  InformationAreaItemStyled,
} from "./subscrens.styled";

export const DetailsAnimalSubScreen = ({ animal }) => {
  return (
    <ContainerDetailsAnimalStyled>
      <InformationAreaItemStyled>
        <Text>Idade</Text>
        <Text>{animal?.age || ""}</Text>
      </InformationAreaItemStyled>
    </ContainerDetailsAnimalStyled>
  );
};
