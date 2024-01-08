import styled from "styled-components/native";
import { HomeDashboardItem } from "../atoms/HomeDashboardItem";

export const DashboardHome = () => {
  return (
    <DashboardHomeArea>
      <Row>
        <HomeDashboardItem
          iconPath={require("../../../assets/icon-vaca.png")}
          value="124"
          label="Animais"
        />
        <HomeDashboardItem
          iconPath={require("../../../assets/ordenha.png")}
          value="443L"
          label="Leite"
        />
      </Row>

      <Row>
        <HomeDashboardItem
          iconPath={require("../../../assets/ordenha.png")}
          value="443L"
          label="Leite"
        />

        <HomeDashboardItem
          iconPath={require("../../../assets/icon-vaca.png")}
          value="124"
          label="Animais"
        />
      </Row>
    </DashboardHomeArea>
  );
};

const DashboardHomeArea = styled.View`
  flex-direction: column;
  margin-top: 10px;
  justify-content: space-evenly;
  width: 100%;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;
