import axios from "axios";
import { currToken } from "../token";

export default class ClaimService {
  static #apiUrl = "https://mysterious-tundra-84714.herokuapp.com/claim";
  static #curToken = currToken;
  static async getAll() {
    let config = {
      headers: {
        Authorization: this.#curToken,
      },
    };
    const response = await axios.get(this.#apiUrl, config);
    return response;
  }
  static async addClaim(data) {
    let config = {
      headers: {
        Authorization: this.#curToken,
      },
    };
    const response = await axios.post(this.#apiUrl, data, config);
    return response;
  }
  static async editClaim(data) {
    let url = `${this.#apiUrl}/${data._id}`
    let config = {
      headers: {
        Authorization: this.#curToken,
      },
    };
    const response = await axios.put(url, data, config);
    return response;
  }
}
