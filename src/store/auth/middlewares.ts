import {Store} from 'redux';
import {Action} from '../types';
import {setToken} from './actions';
import {push} from 'connected-react-router';
import {ACTION_TYPES} from './actionsTypes';
import { PATHS } from '../../components/App/App.paths';


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
            fetchToken(code).then((token: string) => {
                dispatch(setToken(token));
                dispatch(push(PATHS.HOME));
            });
        }

        next(action);
    };

const signOutMiddleware = ({dispatch}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.SIGN_OUT) {
        dispatch(setToken(undefined));
        dispatch(push(PATHS.SIGN_IN));
    }

    next(action);
};

export const authMiddlewares = [fetchMiddleware, signOutMiddleware];
