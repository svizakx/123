import { APIService, EventService } from ".";
import Events from "./Events";

const authToken = "auth_token";
const role = "role";

export default class AuthService {
  static login(userData) {
    return APIService.post("auth/login", userData).then((response) => {
      let data = response.data;
      window.localStorage.setItem(authToken, `${data.token.accessToken}`);
      window.localStorage.setItem(role, `${data.role}`);
      EventService.Emit(Events.Auth_Login);
    });
  }

  static isLogged() {
    return window.localStorage.getItem(authToken) !== null;
  }

  static logout() {
    window.localStorage.removeItem(authToken);
    window.localStorage.removeItem(role);
    EventService.Emit(Events.Auth_Logout);
  }
}
