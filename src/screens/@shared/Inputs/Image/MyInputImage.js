import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  AreaMyInputImageStyled,
  MyInputImageButtonStyled,
} from "./MyInputImage.styled";
export const MyInputImage = ({
  label = "",
  buttonLabel = "Selecionar",
  setImage,
  image,
}) => {
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 5],
        quality: 1,
      });

      if (!result.canceled) {
        const fileInfo = await FileSystem.getInfoAsync(result.uri);
        const fileName = fileInfo.uri.split("/").pop();
        const match = /\.(\w+)$/.exec(fileName);
        const type = match ? `image/${match[1]}` : `image`;

        const file = {
          uri: result.uri,
          name: fileName,
          type,
        };
        setImage(file);
      }
    } catch (error) {
      console.log(error);
    }
    // No permissions request is necessary for launching the image library
  };

  return (
    <>
      <AreaMyInputImageStyled isImage={!!image}>
        <Text>{label}</Text>
        <MyInputImageButtonStyled
          onPress={pickImage}
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{`${buttonLabel}`}</Text>
          <Feather name="image" size={18} color="black" />
        </MyInputImageButtonStyled>
      </AreaMyInputImageStyled>
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: "100%", height: 200, marginTop: 5 }}
        />
      )}
    </>
  );
};
