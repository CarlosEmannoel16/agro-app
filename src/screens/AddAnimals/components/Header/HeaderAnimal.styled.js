import styled from "styled-components/native";

export const HeaderAddAnimalStyled = styled.View`
  background-color: ${(props) => props.theme.color.primary};
  height: 10%;
  align-items: center;
`;

export const TitleAddAnimalStyled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const AreaTitleAddAnimal = styled.View`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
