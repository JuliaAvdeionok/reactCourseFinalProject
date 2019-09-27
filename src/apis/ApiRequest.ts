import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

interface RequestOptions {
    isProtected?: boolean;
}

export class ApiRequest {
    public static get = async <T>(uri: string, options?: RequestOptions) => {
        try {
            const response = await axios.get<T>(apiUrl + uri);
            return response.data;
        } catch (e) {
            throw e;
        }
    };

    public static post = async <T>(uri: string, options?: RequestOptions) => {
        try {
            const response = await axios.post<T>(apiUrl + uri);
            return response.data;
        } catch (e) {
            throw e;
        }
    };

    public static put = async <T>(uri: string, options?: RequestOptions) => {
        try {
            const response = await axios.put(apiUrl + uri);
            return response.data;
        } catch (e) {
            throw e;
        }
    };

    public static delete = async <T>(uri: string, options?: RequestOptions) => {
        try {
            const response = await axios.delete(apiUrl + uri);
            return response.data;
        } catch (e) {
            throw e;
        }
    };

}
