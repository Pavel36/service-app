import axios from "axios";

interface ILoginData {
    email: string,
    password: string
}

interface IRegistrationData {
    fullName: string,
    email: string,
    password: string
}

export default class AuthService {
    static #apiUrl = "https://mysterious-tundra-84714.herokuapp.com";
    static async login(data:ILoginData) {
        const url = `${this.#apiUrl}/auth/login`
        const responce = await axios.post(url, data)
        console.log(responce.data);
        return responce
    }
    static async register(data:IRegistrationData) {
        const url = `${this.#apiUrl}/auth/registration`
        const responce = await axios.post(url, data)
        console.log(responce.data);
        return responce
    }
}