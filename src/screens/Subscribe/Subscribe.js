import { ImageBackground, Text } from "react-native";
import { TextButtonLogin } from "../login/login.style";
import {
  BodySubscribe,
  ButtonSubscribe,
  HeaderSubscribe,
  SubscribeStyled,
  SubscribeStyledIntern,
  TextInputSubscribe,
  TextReturn,
  TitleSubscribe,
  ViewReturn,
} from "./subscribe.styled";
import { FontAwesome5 } from "@expo/vector-icons";
export const Subscribe = ({ setInLogin, inLogin }) => {
  return (
    <SubscribeStyled>
      <SubscribeStyledIntern>
        <ViewReturn onPress={() => setInLogin(!inLogin)}>
          <FontAwesome5 name="arrow-circle-left" size={24} color="black" />
          <TextReturn>Voltar</TextReturn>
        </ViewReturn>

        <HeaderSubscribe>
          <ImageBackground
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 300,
              height: 200,
              marginTop: 0,
            }}
            resizeMode="contain"
            src="https://img.freepik.com/vetores-gratis/vaca-plana-pastando-em-campo-verde-ao-lado-da-ilustracao-vetorial-de-casa-de-fazenda_1284-67237.jpg?w=1480&t=st=1702947813~exp=1702948413~hmac=17553543637a629457b1bb765b1930e3a1c0e95184e2cf5b890fe72aa60aac4e"
          />
          <TitleSubscribe>Criar Sua Conta</TitleSubscribe>
        </HeaderSubscribe>
        <BodySubscribe>
          <TextInputSubscribe placeholder="Digite seu nome" />
          <TextInputSubscribe placeholder="Digite seu email" />
          <TextInputSubscribe placeholder="Digite seu nome" />
          <TextInputSubscribe placeholder="Escolha uma senha" />
          <ButtonSubscribe>
            <TextButtonLogin>Criar Conta</TextButtonLogin>
          </ButtonSubscribe>
        </BodySubscribe>
      </SubscribeStyledIntern>
    </SubscribeStyled>
  );
};
