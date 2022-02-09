import axios from "axios";
import { getToken } from "../services/getToken";

export enum userRoles {
  worker = "work",
  administrator = "admin",
}

interface IUserData {
  fullName: string;
  email: string;
  password: string;
  role: userRoles;
}

export default class UserService {
  static #baseUrl = "https://mysterious-tundra-84714.herokuapp.com";
  static #apiUrl = "https://mysterious-tundra-84714.herokuapp.com/user";
  static async getAll() {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(this.#apiUrl, config);
    return response;
  }
  static async getUser(id: string) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#apiUrl}/${id}`, config);
    return response;
  }
  static async searchUser(text: string) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#apiUrl}?search=${text}`, config);
    return response;
  }
  static async addUser(data: IUserData) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.post(this.#apiUrl, data, config);
    return response;
  }
  static async editUser(id: string, data: IUserData) {
    let url = `${this.#apiUrl}/${id}`;
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.put(url, data, config);
    return response;
  }
  static async getUserRoles() {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#baseUrl}/roles`, config);
    return response;
  }
}
