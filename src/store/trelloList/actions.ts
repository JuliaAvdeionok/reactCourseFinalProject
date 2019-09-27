import { ACTION_TYPES } from './actionsTypes';
import { TrelloListModel } from '../../models/TrelloListModel';
import { ToAddModel } from '../../models/ToAddModel';

export const fetchTrelloList = (id: string) => ({
    type: ACTION_TYPES.FETCH_TRELLO_LIST,
    payload: id,
});

export const setTrelloList = (list: Array<TrelloListModel>) => ({
    type: ACTION_TYPES.SET_TRELLO_LIST,
    payload: list,
});

export const addTrelloList = (newBoard: ToAddModel) => ({
    type: ACTION_TYPES.ADD_TRELLO_LIST,
    payload: newBoard
});

export const delTrelloList = (id: string) => ({
    type: ACTION_TYPES.DEL_TRELLO_LIST,
    payload: id,
});
