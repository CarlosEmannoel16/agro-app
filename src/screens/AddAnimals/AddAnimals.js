import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import { BodyAddAnimalStyled, TextInputStyled } from "./addAnimals.style";
import { MyInputText } from "../@shared/Inputs/Text/InputText";
import { MyInputNumber } from "../@shared/Inputs/Number/InputNumber";
import { HeaderAddAnimals } from "./components/Header/Header";
import { MyInputSelect } from "../@shared/Inputs/Select/MyInputSelect";
import { MySwitchInput } from "../@shared/Inputs/Switch/MySwith";
import { useEffect, useState } from "react";
import { MyInputDate } from "../@shared/Inputs/Date/MyInputDate";
import { MyInputImage } from "../@shared/Inputs/Image/MyInputImage";
import { MyButton } from "../@shared/Inputs/Button/MyButton";
import AnimalService from "../../services/animal/AnimalService";
export const AddAnimals = ({ setPage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasAMother, setHasAMother] = useState(false);
  const [hasAFather, setHasAFather] = useState(false);
  const [dataSubmit, setDataSubmit] = useState({
    dateOfBirth: new Date(),
    ownerId: "67f2ae2c-79a1-43a3-bcfa-3aa5fee2a3b0",
    type: "",
    breed: "",
    file: "",
    fatherId: "",
    motherId: "",
    surname: "",
  });

  const resetSubmit = () => {
    setDataSubmit({
      dateOfBirth: new Date(),
      ownerId: "67f2ae2c-79a1-43a3-bcfa-3aa5fee2a3b0",
      type: "",
      breed: "",
      file: "",
      fatherId: "",
      motherId: "",
      surname: "",
      weight: "",
    });
  };
  const onSubmit = async () => {
    try {
      if (!dataSubmit?.file) return Alert.alert("Selecione uma imagem");
      if (!dataSubmit?.surname) return Alert.alert("Preencha o apelido");
      if (!dataSubmit?.breed) return Alert.alert("Selecione uma raça");
      if (!dataSubmit?.dateOfBirth) return Alert.alert("Selecione uma data");
      if (!dataSubmit?.ownerId) return Alert.alert("Selecione um dono");

      const formData = new FormData();
      formData.append("dateOfBirth", dataSubmit.dateOfBirth.toISOString());
      formData.append("ownerId", dataSubmit.ownerId);
      formData.append("file", dataSubmit.file);
      formData.append("breed", dataSubmit.breed);
      formData.append("surname", dataSubmit.surname);
      formData.append("fatherId", dataSubmit.fatherId);
      formData.append("motherId", dataSubmit.motherId);
      formData.append("type", dataSubmit.type);

      const result = await AnimalService.create(formData);
      if (result) {
        Alert.alert("Sucesso");
        resetSubmit();
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro");
    }
  };

  const onChangeSubmit = (key, value) => {
    setDataSubmit({ ...dataSubmit, [key]: value });
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <HeaderAddAnimals setPage={setPage} />
      {!isLoading ? (
        <BodyAddAnimalStyled>
          <View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Cadastro de bezerro
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Cadastro de animal externo
              </Text>
            </View>
          </View>
          <ScrollView
            style={{
              paddingHorizontal: 10,
              paddingTop: 10,
              paddingBottom: 60,
              height: "100%",
              paddingBottom: 80,
            }}
          >
            <MyInputText
              text="Apelido"
              value={dataSubmit.surname}
              placeholder="Apelido Do Animal"
              setValue={(value) => {
                onChangeSubmit("surname", value);
              }}
            />
            <MyInputNumber
              text="Peso"
              placeholder="Peso Atual"
              value={dataSubmit.weight}
              setValue={(value) => {
                onChangeSubmit("weight", value);
              }}
            />
            <MyInputSelect
              modalLabel="Selecionar Raça"
              label="Selecionar Raça"
              setValue={(value) => onChangeSubmit("breed", value)}
              value={dataSubmit.breed}
              data={[
                { value: "Não especificada", label: "Não especificada" },
                { value: "Sindi", label: "Sindi" },
                { label: "Angus", value: "angus" },
                { label: "Hereford", value: "hereford" },
                { label: "Holandesa", value: "holandesa" },
                { label: "Pardo Suíço", value: "pardo-suico" },
                { label: "Guzerá", value: "guzera" },
                { label: "Nelore", value: "nelore" },
                { label: "Charolês", value: "charoles" },
                { label: "Brahman", value: "brahman" },
                { label: "Simmental", value: "simmental" },
                { label: "Limousin", value: "limousin" },
                { label: "Jersey", value: "jersey" },
                { label: "Aberdeen Angus", value: "aberdeen-angus" },
                { label: "Senepol", value: "senepol" },
                { label: "Tabapuã", value: "tabapua" },
                { label: "Gir Leiteiro", value: "gir-leiteiro" },
              ]}
            />
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%" }}>
                <MyInputDate
                  modalLabel="Selecione uma data"
                  buttonLabel="Selecionar"
                  label="Data de nascimento"
                  setDate={(value) => onChangeSubmit("dateOfBirth", value)}
                  date={dataSubmit.dateOfBirth}
                />
              </View>
              <View style={{ width: "50%" }}>
                <MyInputSelect
                  modalLabel="Sexo"
                  setValue={(value) => {
                    onChangeSubmit("type", value);
                  }}
                  value={dataSubmit.type}
                  label="Sexo"
                  data={[
                    { value: "COW", label: "Boi" },
                    { value: "OX", label: "Vaca" },
                  ]}
                />
              </View>
            </View>
            <MySwitchInput
              label="Possui Mãe"
              isChecked={hasAMother}
              setChecked={setHasAMother}
            />
            {hasAMother && (
              <MyInputSelect
                modalLabel="Selecionar Mãe"
                label="Mãe"
                setValue={(value) => {
                  onChangeSubmit("motherId", value);
                }}
                value={dataSubmit.motherId}
                data={[
                  { value: "Nelore", label: "Nelore" },
                  { value: "Sindi", label: "Sindi" },
                  { value: "Não especificada", label: "Não especificada" },
                ]}
              />
            )}
            <MySwitchInput
              label="Possui Pai"
              isChecked={hasAFather}
              setChecked={setHasAFather}
            />
            {hasAFather && (
              <MyInputSelect
                modalLabel=" Selecionar Pai"
                setValue={(value) => {
                  onChangeSubmit("fatherId", value);
                }}
                value={dataSubmit.fatherId}
                label="Pai"
                data={[
                  { value: "Nelore", label: "Nelore" },
                  { value: "Sindi", label: "Sindi" },
                  { value: "Não especificada", label: "Não especificada" },
                ]}
              />
            )}
            <MyInputImage
              label="Imagem"
              image={dataSubmit.file}
              buttonLabel="Selecionar"
              setImage={(value) => onChangeSubmit("file", value)}
            />
            <MyButton name="Cadastrar" onSubmit={async () => onSubmit()} />
          </ScrollView>
        </BodyAddAnimalStyled>
      ) : (
        <View>
          <Text>Carregando</Text>
        </View>
      )}
    </View>
  );
};
