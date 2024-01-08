import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ItemOptionAreaStyled } from "../Animal.styled";
import AnimalService from "../../../services/animal/AnimalService";
export const AddWeight = ({
  modalLabel = "Adicionar nova pesagem",
  animalId,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [addWeightDTO, setWeightDTO] = useState({
    idAnimal: animalId,
    weight: 0,
    date: new Date(),
  });

  const onChangeDTO = (value, key) => {
    console.log("value", value);
    setWeightDTO({ ...addWeightDTO, [key]: value });
  };

  const onSubmit = async () => {
    await AnimalService.addWeight(addWeightDTO);
  };

  return (
    <>
      <ItemOptionAreaStyled onPress={() => setModalVisible(!modalVisible)}>
        <MaterialCommunityIcons name="weight-pound" size={32} color="#fff" />
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Adicionar pesagem
        </Text>
      </ItemOptionAreaStyled>

      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={styles.modalView}
      >
        <View style={styles.headerModal}>
          <Pressable
            style={[styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Cancelar</Text>
          </Pressable>
          <Text style={styles.titleText}>{modalLabel}</Text>
          <Pressable onPress={onSubmit}>
            <Text style={styles.textStyle}>Adicionar</Text>
          </Pressable>
        </View>

        <View style={styles.centeredView}>
          <View
            style={{
              width: "90%",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text>Valor da pesagem (KG)</Text>
            <TextInput
              placeholder="Valor da pesagem"
              style={styles.input}
              returnKeyLabel="Ok"
              accessibilityLanguage="PT-BR"
              aria-expanded={true}
              onChange={(e) => onChangeDTO(e.nativeEvent.text, "weight")}
              enterKeyHint="done"
              keyboardType="decimal-pad"
            />
          </View>
          <View
            style={{
              width: "90%",
              alignItems: "flex-start",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <Text>Data da pesagem {date.toLocaleDateString("pt-br")}</Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={addWeightDTO.date}
              mode="date"
              accentColor="#f56217"
              locale="pt-br"
              display="inline"
              is24Hour={true}
              onChange={(e) => {
                onChangeDTO(new Date(e.nativeEvent.timestamp), "date");
              }}
              style={{
                width: "100%",
                height: "80%",
                marginTop: 10,
                backgroundColor: "#00000070",
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderRadius: 10,
    paddingLeft: 10,
    height: 50,
    marginTop: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    borderWidth: 1,
  },
  modalView: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    width: "100%",
    height: "100%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonClose: {
    width: 80,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonCloseOk: {
    width: 80,
    alignContent: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "#f56217",
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },

  headerModal: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
});
