import {Store} from 'redux';
import {Action} from '../types';
import axios from 'axios';
import {setToken} from './actions';
import {push} from 'connected-react-router';
import {ACTION_TYPES} from './actionsTypes';

const key = process.env.REACT_APP_CLIENT_ID;
const secret = process.env.REACT_APP_SECRET;
const redirectUrl = process.env.REACT_APP_REDIRECT_URI;

const fetchToken = async (code: string) => {
    try {
        // const AUTH_URL = `https://unsplash.com/oauth/token?client_id=${key}&client_secret=${secret}&redirect_uri=${redirectUrl}&code=${code}&grant_type=${'authorization_code'}`;
        // const response = await axios.post<string>(AUTH_URL);
        return code;
    } catch (e) {
        throw e;
    }
};

const fetchMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) =>
    (action: Action<any>) => {
        if (action.type === ACTION_TYPES.FETCH_TOKEN) {
            const code = action.payload;
            const state = getState();
            console.log(state.counter.value);
            fetchToken(code).then((token: string) => {
                dispatch(setToken(token));
                dispatch(push('/'));
            });
        }

        next(action);
    };

export const authMiddlewares = [fetchMiddleware];
