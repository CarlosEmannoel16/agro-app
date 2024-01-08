import { ImageBackground, Text, View } from "react-native";
import {
  HeaderHomeProfileStyled,
  HeaderHomeStyled,
  PhraseWelcomeStyled,
  TextNameUserStyled,
} from "./header.style";
import { useContext, useEffect, useState } from "react";
import UserService from "../../../../services/user/UserService";
import { UserContext } from "../../../../context/UserContext";

export const HeaderHome = () => {
  const { user } = useContext(UserContext);

  const getPhraseByHour = () => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 0 && hour <= 12) return "Bom dia";
    else if (hour >= 12 && hour <= 18) return "Boa tarde";
    else return "Boa noite";
  };

  return (
    <HeaderHomeStyled>
      <HeaderHomeProfileStyled>
        <ImageBackground
          imageStyle={{ borderRadius: 50 }}
          style={{ width: 50, height: 50 }}
          source={{
            uri: user?.user?.profile
              ? user?.user?.profile
              : "https://static.vecteezy.com/ti/vetor-gratis/p1/16516166-design-de-icone-de-de-fazendeiro-gratis-vetor.jpg",
          }}
        ></ImageBackground>
        <View>
          <PhraseWelcomeStyled>{getPhraseByHour()}</PhraseWelcomeStyled>
          <TextNameUserStyled>
            {user?.user.name ? user?.user.name : "Usário"}!
          </TextNameUserStyled>
        </View>
      </HeaderHomeProfileStyled>
    </HeaderHomeStyled>
  );
};
