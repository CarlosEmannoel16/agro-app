import { Http } from "../@shared/Http";

class AnimalService extends Http {
  constructor() {
    super();
  }

  async getById(id) {
    const result = await this.httpClient.get(`/animal/${id}`);
    return result.data;
  }

  async getAll() {
    const idUser = await this.getIdUser();
    const result = await this.httpClient.get(`/animal/all/${idUser}`);
    return result.data;
  }

  async create(data) {
    const result = await this.httpClient.post(`/animal`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return result?.data;
  }

  async search(data) {
    console.log("data", data);
    const idUser = await this.getIdUser();
    const result = await this.httpClient.get(
      `/animal/search/${data}/${idUser}`,
      data
    );
    return result.data;
  }

  async addWeight(dto) {
    const idUser = await this.getIdUser();
    const data = {
      ...dto,
      idUser,
      date: dto.date.toISOString(),
    };

    console.log("data", data);
    const result = await this.httpClient.patch(`/animal/add-weight`, data);
    return result.data;
  }
}

export default new AnimalService();
