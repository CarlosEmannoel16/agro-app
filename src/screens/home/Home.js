import { ScrollView, Text, View } from "react-native";
import { BodyHomeStyled, TitleHomeStyled } from "./home.style";
import { HeaderHome } from "./components/Header/Header";
import { CardHome } from "./components/cards/CardsHome";
import { CardSmall } from "./components/cardSmall/CardSmall";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const Home = () => {
  return (
    <View>
      <HeaderHome />
      <BodyHomeStyled>
        <View>
          <TitleHomeStyled>
            <Text style={{ fontWeight: "bold" }}> Acesso rápido</Text>
          </TitleHomeStyled>
          <View style={{ flexDirection: "row" }}>
            <CardSmall
              name="Cadastro de animal"
              icon={
                <MaterialCommunityIcons name="cow" size={36} color="#fff" />
              }
            />
            <CardSmall name="Cadastro de leite diário" />
            <CardSmall name="Em breve" />
            <CardSmall name="Em breve" />
          </View>
          <TitleHomeStyled>
            <Text style={{ fontWeight: "bold" }}> Relatórios</Text>
          </TitleHomeStyled>
          <ScrollView
            horizontal={true}
            style={{ width: "100%" }}
            showsHorizontalScrollIndicator={false}
          >
            <CardHome
              name="Número de bovinos cadastrados"
              value={18}
              src="https://images8.alphacoders.com/363/thumb-1920-363177.jpg"
            />
            <CardHome
              name="Produção leiteira mensal (L)"
              value="123L"
              src="https://alavoura.com.br/wp-content/uploads/2022/09/GettyImages-466833697-1-e1664150654390.jpg"
            />
            <CardHome
              name="Bezerros nascidos no mês"
              value={128}
              src="https://cdn.pixabay.com/photo/2017/02/15/14/30/cow-2068851_1280.jpg"
            />
          </ScrollView>

          <TitleHomeStyled>
            <Text style={{ fontWeight: "bold" }}> Últimas noticias</Text>
          </TitleHomeStyled>
        </View>
      </BodyHomeStyled>
    </View>
  );
};
