import { Http } from "../@shared/Http";

export class UserService extends Http {
  async getById(id) {
    const result = await this.httpClient.get(`/user/${id}`);
    return result.data;
  }

  async getAll() {
    const result = await this.httpClient.get(`/user`);
    return result.data;
  }

  async authenticate(data) {
    const result = await this.httpClient.post(`/authenticate`, data);
    return result.data;
  }
}

export default new UserService();
