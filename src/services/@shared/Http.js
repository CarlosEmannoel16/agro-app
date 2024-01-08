import axios from "axios";
import Urls from "../../config/Urls";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class Http {
  httpClient;
  idUser;

  constructor() {
    this.httpClient = axios.create({
      baseURL: Urls.API_URL,
    });

    this.getIdUser();
  }

  getIdUser() {
    if (!this.idUser)
      AsyncStorage.getItem("user").then((response) => {
        if (response) {
          this.idUser = JSON.parse(response).user.id;
        }
      });
    return this.idUser;
  }
}
