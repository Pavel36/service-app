import axios from "axios";

interface loginData {
    email: string,
    password: string
}

export default class AuthService {
    static #apiUrl = "https://mysterious-tundra-84714.herokuapp.com";
    static async login(data:loginData) {
        const url = `${this.#apiUrl}/auth/login`
        const responce = await axios.post(url, data)
        console.log(responce.data);
        return responce
    }
}