import { Text } from "react-native";
import { AreaNumberStyled, NumberInputStyled } from "./inputNumber.styled";

export const MyInputNumber = ({ placeholder, text, setValue, value }) => {
  return (
    <AreaNumberStyled>
      <Text>{text}</Text>
      <NumberInputStyled
        placeholder={placeholder}
        keyboardType="decimal-pad"
        values={value}
        onChange={(e) => setValue(e.nativeEvent.text)}
      ></NumberInputStyled>
    </AreaNumberStyled>
  );
};
