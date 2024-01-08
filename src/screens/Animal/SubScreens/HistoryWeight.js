import { Alert, Text, View } from "react-native";
import {
  ContainerDetailsAnimalStyled,
  InformationAreaItemStyled,
} from "./subscrens.styled";

export const HistoryWeightAnimalSubScreen = ({ animal }) => {
  return (
    <ContainerDetailsAnimalStyled>
      {animal.weightHistory.map((weight) => (
        <InformationAreaItemStyled>
          <Text>{weight.dateOfRegister}</Text>
          <Text>{weight.weight}Kg</Text>
        </InformationAreaItemStyled>
      ))}
    </ContainerDetailsAnimalStyled>
  );
};
