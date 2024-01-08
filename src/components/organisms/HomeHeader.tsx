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
  padding: 20px;
  height: 200px;
`;
