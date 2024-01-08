import styled from "styled-components/native";

export const HeaderHomeStyled = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme.color.primary};
`;

export const HeaderHomeProfileStyled = styled.View`
  width: 100%;
  flex-direction: row;
  height: 40px;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 20px;
`;

export const PhraseWelcomeStyled = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-left: 8px;
`;

export const TextNameUserStyled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-left: 8px;
`;
