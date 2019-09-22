import {ACTION_TYPES} from './actionsTypes';

export const fetchMember = (code: string) => ({
    type: ACTION_TYPES.FETCH_MEMBER,
    payload: code,
});

export const setMember = (token: string) => ({
    type: ACTION_TYPES.SET_MEMBER,
    payload: token,
});
