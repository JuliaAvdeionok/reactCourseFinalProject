import {ACTION_TYPES} from './actionsTypes';

export const fetchToken = (code: string) => ({
    type: ACTION_TYPES.FETCH_TOKEN,
    payload: code,
});

export const setToken = (token: string) => ({
    type: ACTION_TYPES.SET_TOKEN,
    payload: token,
});

export const signOut = () => ({
    type: ACTION_TYPES.SIGN_OUT
});
