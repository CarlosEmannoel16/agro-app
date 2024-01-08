import styled from "styled-components/native";

export const ExternalContainerHorizontalMenuStyled = styled.ScrollView`
  width: 100%;
  padding-left: 10px;
  padding-right: 20px;
  max-height: 40px;
`;

export const MenuItemHorizontalStyled = styled.TouchableOpacity`
  width: auto;
  padding-left: 6px;
  padding-right: 6px;
  margin-right: 10px;
  height: 30px;
  border-radius: 10%;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => (props.isSelected ? "#000" : "#00000020")};
  background-color: #fff;
  box-shadow: -1px 1px 2px #00000020;
`;
