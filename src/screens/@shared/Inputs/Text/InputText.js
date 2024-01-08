import { Switch, Text } from "react-native";
import { AreaTextStyled, TextInputStyled } from "./inputText.styled";
import { useState } from "react";

export const MyInputText = ({ placeholder, text, value, setValue }) => {
  return (
    <AreaTextStyled>
      <Text>{text}</Text>
      <TextInputStyled
        keyboardType="default"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.nativeEvent.text)}
      ></TextInputStyled>
    </AreaTextStyled>
  );
};
