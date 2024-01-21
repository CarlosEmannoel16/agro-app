import styled from "styled-components/native";
import { QuickAccess } from "../organisms/QuickAccess";
import { HomeHeader } from "../organisms/HomeHeader";
import { DashboardHome } from "../organisms/DashboardHome";
export const Home = () => {
  return (
    <HomeArea>
      <HomeHeader />
      <QuickAccess />
      <DashboardHome />
    </HomeArea>
  );
};

export const HomeArea = styled.View`
  background-color: ${(props) => props.theme.color.primary};

`;
