import { ACTION_TYPES } from './actionsTypes';
import { TrelloListModel } from '../../models/TrelloListModel';

export const fetchTrelloList = (id: string) => ({
    type: ACTION_TYPES.FETCH_TRELLO_LIST,
    payload: id,
});

export const setTrelloList = (list: Array<TrelloListModel>) => ({
    type: ACTION_TYPES.SET_TRELLO_LIST,
    payload: list,
});
