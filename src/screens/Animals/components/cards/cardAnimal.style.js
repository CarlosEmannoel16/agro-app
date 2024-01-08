import styled from "styled-components/native";

export const CardAnimalStyled = styled.TouchableOpacity`
  width: 90%;
  height: 90px;
  border-radius: 10px;
  background-color: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 0px 1px #00000050;
  margin-bottom: 10px;
`;

export const TextValueCardStyled = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #000;
`;

export const TextNameCardStyled = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const TextCodCardStyled = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

export const ButtonMore = styled.TouchableOpacity`
  width: 100px;
  height: 80;
  background-color: #237f48;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  bottom: inherit;
`;
