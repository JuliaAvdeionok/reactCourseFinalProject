import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { CardModel } from '../../models/CardModel';
import { TrelloListModel } from '../../models/TrelloListModel';

export interface TrelloListState {
    trelloListArray: Array<CardModel>;
}

export const INITIAL_STATE = {
    id: undefined,
    trelloListArray: []
};

export default (appState: TrelloListState = INITIAL_STATE, action: Action<Array<TrelloListModel>>) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_TRELLO_LIST:
            return {...appState, id: action.payload };
        case ACTION_TYPES.SET_TRELLO_LIST:
            return {...appState, trelloListArray: action.payload };
        default:
            return appState;
    }
};
