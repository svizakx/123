import axios from 'axios';

const authToken = 'auth_token';

export default class APIService {
    static API_URL = 'https://api.rum.software';

    static get(address) {
        let token = window.localStorage.getItem(authToken);
        const authHeader = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        return axios.get(`${this.API_URL}/${address}`, authHeader);
    }


    static post(address, data) {
        let token = window.localStorage.getItem(authToken);
        const authHeader = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        return axios
            .post(`${this.API_URL}/${address}`, data, authHeader)

    }
}
