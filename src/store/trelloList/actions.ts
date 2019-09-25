import { ACTION_TYPES } from './actionsTypes';
import { TrelloList } from '../../models/TrelloList';

export const fetchTrelloList = (id: string) => ({
    type: ACTION_TYPES.FETCH_TRELLO_LIST,
    payload: id,
});

export const setTrelloList = (list: Array<TrelloList>) => ({
    type: ACTION_TYPES.SET_TRELLO_LIST,
    payload: list,
});
