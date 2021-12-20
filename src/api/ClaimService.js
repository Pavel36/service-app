import axios from "axios";
import { getToken } from "../services/getToken";

export default class ClaimService {
  static #apiUrl = "https://mysterious-tundra-84714.herokuapp.com/claim";
  static async getAll() {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(this.#apiUrl, config);
    return response;
  }
  static async getClaim(id) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#apiUrl}/${id}`, config);
    return response;
  }
  static async searchClaim(text) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#apiUrl}?search=${text}`, config);
    return response;
  }
  static async addClaim(data) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.post(this.#apiUrl, data, config);
    return response;
  }
  static async editClaim(id, data) {
    let url = `${this.#apiUrl}/${id}`;
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.put(url, data, config);
    return response;
  }
}
