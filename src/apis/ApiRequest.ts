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

}
