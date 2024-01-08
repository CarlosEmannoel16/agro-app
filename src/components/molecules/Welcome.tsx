import styled from "styled-components/native";
import { ProfilePic } from "../atoms/ProfilePic";
import { WelcomeLabel } from "../atoms/WelcomeLabel";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Welcome = () => {
  const { user } = useContext(UserContext);

  const url = user?.user?.profile
    ? user?.user?.profile
    : "https://static.vecteezy.com/ti/vetor-gratis/p1/16516166-design-de-icone-de-de-fazendeiro-gratis-vetor.jpg";

  return (
    <WelcomeArea>
      <ProfilePic url={url} />
      <WelcomeLabel />
    </WelcomeArea>
  );
};

export const WelcomeArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
