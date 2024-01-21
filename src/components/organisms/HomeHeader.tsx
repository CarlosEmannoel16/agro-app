import styled from "styled-components/native";
import { Welcome } from "../molecules/Welcome";

export const HomeHeader = () => {
  return (
    <HomeHeaderArea>
      <Welcome />
    </HomeHeaderArea>
  );
};

const HomeHeaderArea = styled.View`
  padding: 10px;
  height: 150px;
  background-color: ${(props) => props.theme.color.primary};
`;
