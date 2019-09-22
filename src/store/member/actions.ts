import { ACTION_TYPES } from './actionsTypes';

export const setList = (list: Array<any>) => ({
    type: ACTION_TYPES.SET_LIST,
    payload: list,
});

export const fetchList = () => ({
    type: ACTION_TYPES.FETCH_LIST,
});
