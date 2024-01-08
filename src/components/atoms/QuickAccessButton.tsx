import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface QuickAccessButtonProps {
  iconName: any;
}

export const QuickAccessButton = ({ iconName }: QuickAccessButtonProps) => {
  return (
    <QuickAccessButtonTouchable>
      <MaterialCommunityIcons name={iconName} size={32} color="black" />
    </QuickAccessButtonTouchable>
  );
};

const QuickAccessButtonTouchable = styled.TouchableOpacity`
  width: 90px;
  height: 80px;
  border-radius: 15px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
