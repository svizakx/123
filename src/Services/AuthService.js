import APIService from './APIService';

const authToken = 'auth_token';

export default class AuthService {

    static login(userData) {
        return APIService.post('auth/login', userData);
    }

    static handleLogin(data) {
        window.localStorage.setItem(authToken, `${data.token.accessToken}`);
    }
}