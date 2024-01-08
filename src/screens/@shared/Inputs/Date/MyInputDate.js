import DateTimePicker from "@react-native-community/datetimepicker";
import {
  AreaMyInputDateStyled,
  MyInputDateButtonStyled,
} from "./MyInputDate.styled";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export const MyInputDate = ({
  modalLabel,
  label = "Data",
  date = new Date(),
  setDate,
  buttonLabel = "Selecionar",
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AreaMyInputDateStyled>
      <Text>{label}</Text>
      <MyInputDateButtonStyled onPress={() => setModalVisible(true)}>
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {`${
            date instanceof Date
              ? date?.toLocaleDateString("pt-br") || buttonLabel
              : buttonLabel
          }`}
        </Text>
        <AntDesign name="calendar" size={18} color="black" />
      </MyInputDateButtonStyled>
      <Modal
        style={styles.modalView}
        animationType="slide"
        presentationStyle="formSheet"
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.headerModal}>
          <Pressable
            style={[styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Canelar</Text>
          </Pressable>
          <Text style={styles.titleText}>{modalLabel}</Text>
          <Pressable
            style={[styles.button, styles.buttonCloseOk]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Salvar</Text>
          </Pressable>
        </View>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          locale="pt-br"
          display="spinner"
          is24Hour={true}
          onChange={(e) => {
            setDate(new Date(e.nativeEvent.timestamp));
          }}
          textColor="#000"
          style={styles.datePicker}
        />
      </Modal>
    </AreaMyInputDateStyled>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  modalView: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
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
    paddingTop: 25,
  },
  datePicker: {
    marginTop: 60,
  },
});
