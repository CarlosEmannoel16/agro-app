import { Text } from "react-native";
import { MyButtonStyled } from "./MyButton.styled";

export const MyButton = ({ name, onSubmit }) => {
  return (
    <MyButtonStyled onPress={onSubmit}>
      <Text style={{ color: "#fff" }}>{name}</Text>
    </MyButtonStyled>
  );
};
