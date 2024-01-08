import styled from "styled-components/native";

export const HeaderAnimalStyled = styled.View`
  width: 100%;
  height: 15%;
  background-color: ${(props) => props.theme.color.primary};
  align-items: center;
`;

export const AreaTitle = styled.View`
  width: 100%;
  height: 40px;
  padding-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleAnimalStyled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const SearchAnimalStyled = styled.TextInput`
  width: 90%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;
