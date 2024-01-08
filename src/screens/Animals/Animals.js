import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";

import AnimalService from "../../services/animal/AnimalService";
import { BodyAnimalStyled } from "./animal.style";
import { HeaderAnimal } from "./components/Header/Header";
import { CardAnimal } from "./components/cards/CardsAnimal";
import config from "../../config/Urls";
import { useEffect, useState } from "react";
import { AnimalScreen } from "../Animal/Animal";
import { AddAnimals } from "../AddAnimals/AddAnimals";
export const Animal = () => {
  const [page, setPage] = useState("LIST");
  const [animals, setAnimals] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAnimals = async () => {
    setLoading(true);
    const result = await AnimalService.getAll();
    setAnimals(result);
    setLoading(false);
  };

  useEffect(() => {
    getAnimals()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onRefresh = async () => {
    await getAnimals();
  };

  let a = 0;
  console.log("animals", animals);

  return (
    <>
      {page === "DETAILS_ANIMAL" ? (
        <AnimalScreen setPage={setPage} />
      ) : page === "LIST" ? (
        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <HeaderAnimal
            setLoading={setLoading}
            setAnimals={setAnimals}
            setPage={setPage}
          />

          <BodyAnimalStyled>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  horizontal={false}
                />
              }
              showsVerticalScrollIndicator={false}
              style={{
                width: "100%",
                height: 400,
              }}
            >
              {!loading ? (
                <View
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  {animals.map((animal, index) => {
                    if (a) a = 0;
                    else a = 1;
                    return (
                      <CardAnimal
                        key={index}
                        animal={animal}
                        setPage={setPage}
                        cod="08765"
                        imageUrl={
                          !!animal?.image[0]
                            ? `${config.API_URL}/images/${animal?.image[0]}`
                            : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                        }
                      />
                    );
                  })}
                </View>
              ) : (
                <ActivityIndicator size="large" color="#00ff00" />
              )}
            </ScrollView>
          </BodyAnimalStyled>
        </View>
      ) : page === "ADD_ANIMAL" ? (
        <AddAnimals setPage={setPage} />
      ) : (
        <></>
      )}
    </>
  );
};
