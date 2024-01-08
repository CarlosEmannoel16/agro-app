import { ImageBackground } from "react-native";
import styled from "styled-components/native";

interface props {
  iconPath: any;
  label: string;
  value: string;
}

export const HomeDashboardItem = ({ iconPath, label, value }: props) => {
  return (
    <HomeDashboardItemArea>
      <ImageBackground
        source={iconPath}
        style={{ width: 90, height: 90, marginTop: -30 }}
      />
      <HomeDashboardItemLabel>{label}</HomeDashboardItemLabel>
      <HomeDashboardItemValue>{value}</HomeDashboardItemValue>
    </HomeDashboardItemArea>
  );
};

const HomeDashboardItemArea = styled.View`
  width: 46%;
  box-shadow: 0px 0px 5px rgba(249, 199, 199, 0.15);
  background-color: #fff;
  height: 150px;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 50px;
  text-align: center;
`;

const HomeDashboardItemLabel = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #838282;
  margin-top: 5px;
  text-align: center;
`;

const HomeDashboardItemValue = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: #838282;
  margin-top: 5px;
  text-align: center;
`;
