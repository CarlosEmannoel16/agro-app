import styled from "styled-components/native";

export const ContainerAnimalStyled = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

export const BodyAddAnimalStyled = styled.View`
  z-index: 5;
  background-color: #fff;
  height: 90%;
`;

export const HeaderAnimalStyled = styled.View`
  width: 100%;
  height: 40%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const InternHeaderAnimalStyled = styled.ImageBackground`
  width: 95%;
  height: 95%;
  background-color: #fff;
  border-radius: 15px;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 10px;
  padding-top: 15px;
`;

export const NameAnimalAreaStyled = styled.View`
  width: 100%;
  height: 10%;
  background-color: #fff;
  align-items: flex-start;
  padding-left: 10px;
  justify-content: center;
`;

export const TextAnimalStyled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const OptionsAreaStyled = styled.View`
  width: 100%;
  flex-direction: row;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const ItemOptionAreaStyled = styled.Pressable`
  width: 110px;
  height: 110px;
  align-items: center;
  justify-content: center;
  background-color: #512da8;
  border-radius: 10px;
  padding: 10px;
`;

export const DividerStyled = styled.View`
  width: 100%;
  height: 1px;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: #00000020;
`;
