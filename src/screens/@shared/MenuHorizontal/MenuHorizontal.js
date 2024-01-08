import { Text } from "react-native";
import {
  ExternalContainerHorizontalMenuStyled,
  MenuItemHorizontalStyled,
} from "./menuHorizontal.styled";

export const MenuHorizontal = ({ currentSbScreen, setCurrentSbScreen }) => {
  const onSelected = (index) => {
    setCurrentSbScreen(index);
  };
  return (
    <ExternalContainerHorizontalMenuStyled
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <MenuItemHorizontalStyled
        isSelected={currentSbScreen == 0}
        onPress={() => onSelected(0)}
      >
        <Text>Detalhes</Text>
      </MenuItemHorizontalStyled>
      <MenuItemHorizontalStyled
        isSelected={currentSbScreen == 1}
        onPress={() => onSelected(1)}
      >
        <Text>Histórico de pesagem</Text>
      </MenuItemHorizontalStyled>
      <MenuItemHorizontalStyled
        isSelected={currentSbScreen == 2}
        onPress={() => onSelected(2)}
      >
        <Text>Histórico de vacinas</Text>
      </MenuItemHorizontalStyled>

      <MenuItemHorizontalStyled
        isSelected={currentSbScreen == 2}
        onPress={() => onSelected(2)}
      >
        <Text>Produções leiteiras</Text>
      </MenuItemHorizontalStyled>
    </ExternalContainerHorizontalMenuStyled>
  );
};
