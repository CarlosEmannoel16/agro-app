import styled from "styled-components/native";
import { QuickAccessOption } from "../molecules/QuickAccessOption";

export const QuickAccess = () => {
  return (
    <QuickAccessArea>
      <QuickAccessOption iconName="cow" label="Cadastrar Animal" />
      <QuickAccessOption iconName="cow" label="Cadastrar Animal" />
      <QuickAccessOption iconName="cow" label="Cadastrar Animal" />
      <QuickAccessOption iconName="cow" label="Cadastrar Animal" />
    </QuickAccessArea>
  );
};

const QuickAccessArea = styled.View`
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-evenly;
  width: 100%;
`;
