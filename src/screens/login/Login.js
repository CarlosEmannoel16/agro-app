import { Alert, ImageBackground, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  BodyLogin,
  ButtonLogin,
  ExternalInput,
  HeaderLogin,
  LoginStyled,
  LoginStyledIntern,
  NameLogin,
  SubscriptLogin,
  TextButtonLogin,
  TextInputLogin,
  TextLabelInput,
  TitleLogin,
} from "./login.style";
import { useContext, useState } from "react";
import UserService from "../../services/user/UserService";
import { UserContext } from "../../context/UserContext";

export const Login = ({ setInLogin, inLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    if (!password || !email) {
      Alert.alert("Preencha todos os campos");
      setLoading(false);
      return;
    }
    UserService.authenticate({ email, password })
      .then((response) => {
        Alert.alert("Login Realizado com sucesso");
        AsyncStorage.setItem("user", JSON.stringify(response)).then(() => {
          setUser(response);
          setLoading(false);
        });
      })
      .catch((err) => {
        Alert.alert("Erro ao realizar login");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <LoginStyled>
      <LoginStyledIntern>
        <HeaderLogin>
          <TitleLogin>Amigo Fazendeiro</TitleLogin>
          <ImageBackground
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 300,
              height: 200,
            }}
            resizeMode="contain"
            source={require("../../../assets/farm-5665207_640.png")}
          />
        </HeaderLogin>
        <BodyLogin>
          <NameLogin>Realizar Login</NameLogin>
          <ExternalInput>
            <TextLabelInput>Email</TextLabelInput>
            <TextInputLogin
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.nativeEvent.text)}
            />
          </ExternalInput>
          <ExternalInput>
            <TextLabelInput>Senha</TextLabelInput>
            <TextInputLogin
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.nativeEvent.text)}
            />
          </ExternalInput>
          <ButtonLogin onPress={onSubmit} disabled={loading}>
            <TextButtonLogin>Entrar</TextButtonLogin>
          </ButtonLogin>
          <SubscriptLogin onPress={() => setInLogin(!inLogin)}>
            Cadastre-se
          </SubscriptLogin>
        </BodyLogin>
      </LoginStyledIntern>
    </LoginStyled>
  );
};
