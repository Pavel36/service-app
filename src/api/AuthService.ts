import axios from "axios";
import { getToken } from "../services/getToken";

interface ILoginData {
  email: string;
  password: string;
}

interface IRegistrationData {
  fullName: string;
  email: string;
  password: string;
}

export default class AuthService {
  static #apiUrl = "https://mysterious-tundra-84714.herokuapp.com";
  static async login(data: ILoginData) {
    const url = `${this.#apiUrl}/auth/login`;
    const responce = await axios.post(url, data);
    console.log(responce.data);
    return responce;
  }
  static async register(data: IRegistrationData) {
    const url = `${this.#apiUrl}/auth/registration`;
    const responce = await axios.post(url, data);
    console.log(responce.data);
    return responce;
  }
  static async checkIsAdmin(userId: string) {
    const url = `${this.#apiUrl}/user/${userId}`;
    let config = {
        headers: {
          Authorization: getToken(),
        },
      };
    const responce = await axios.get(url, config);
    console.log(responce.data);
    return responce;
  }
}
