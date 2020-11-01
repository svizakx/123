import axios from "axios";
import Events from "./Events";
import EventService from "./EventService";

const authToken = "auth_token";

export default class APIService {
  static API_URL = "https://api.rum.software";

  static get(address) {
    return axios
      .get(`${this.API_URL}/${address}`, {
        headers: this._getHeaders(),
      })
      .catch(this._handle401);
  }

  static post(address, data) {
    return axios
      .post(`${this.API_URL}/${address}`, data, {
        headers: this._getHeaders(),
      })
      .catch(this._handle401);
  }

  static _getHeaders() {
    let token = window.localStorage.getItem(authToken);
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  static _handle401(e) {
    if (e.response.status === 401) {
      EventService.Emit(Events.Unauthorized);
    } else throw e;
  }
}
