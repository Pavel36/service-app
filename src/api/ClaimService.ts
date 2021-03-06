import axios from "axios";
import { getToken } from "../services/getToken";

export enum ClaimTypes {
  hardware = "hard",
  software = "soft",
  networking = "net",
  troubleshooting = "troublesh",
}

export enum ClaimStatuses {
  declined = "decl",
  new = "new",
  done = "done",
  inProgress = "in-progress",
}

interface IClaimData {
  title: string;
  type: ClaimTypes;
  description: string;
  status: ClaimStatuses;
}

export default class ClaimService {
  static #baseUrl = "https://mysterious-tundra-84714.herokuapp.com";
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
  static async getClaim(id: string) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#apiUrl}/${id}`, config);
    return response;
  }
  static async searchClaim(text: string) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#apiUrl}?search=${text}`, config);
    return response;
  }
  static async addClaim(data: IClaimData) {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.post(this.#apiUrl, data, config);
    return response;
  }
  static async editClaim(id: string, data: IClaimData) {
    let url = `${this.#apiUrl}/${id}`;
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.put(url, data, config);
    return response;
  }
  static async getClaimTypes() {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#baseUrl}/types`, config);
    return response;
  }
  static async getClaimStatuses() {
    let config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const response = await axios.get(`${this.#baseUrl}/status`, config);
    return response;
  }
}
