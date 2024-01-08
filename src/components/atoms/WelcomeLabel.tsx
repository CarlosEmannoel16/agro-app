import { useContext } from "react";
import styled from "styled-components/native";
import { UserContext } from "../../context/UserContext";
export const WelcomeLabel = () => {
  const date = new Date();
  const { user } = useContext(UserContext);

  const getPhraseByHour = () => {
    const hour = date.getHours();

    if (hour >= 0 && hour <= 12) return "Bom dia";
    else if (hour >= 12 && hour <= 18) return "Boa tarde";
    else return "Boa noite";
  };

  return (
    <WelcomeLabelArea>
      <WelcomeLabelText>{getPhraseByHour()}</WelcomeLabelText>
      <WelcomeLabelName>
        {user?.user?.name ? user?.user?.name : "Usuário"}!
      </WelcomeLabelName>
    </WelcomeLabelArea>
  );
};

const WelcomeLabelArea = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const WelcomeLabelText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const WelcomeLabelName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
