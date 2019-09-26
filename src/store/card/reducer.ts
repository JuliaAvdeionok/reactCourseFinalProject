import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { CardModel } from '../../models/CardModel';

export interface CardState {
    cardList: Array<CardModel>;
    cardMap: Map<string, Array<CardModel>>;
}

export const INITIAL_STATE = {
    id: undefined,
    cardList: [],
    cardMap: undefined
};

export default (appState: CardState = INITIAL_STATE, action: Action<Array<CardModel>>) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_CARD_LIST:
            return {...appState, id: action.payload };
        case ACTION_TYPES.FETCH_CARD_MAP:
            return {...appState};
        case ACTION_TYPES.SET_CARD_LIST:
            return {...appState, cardList: action.payload };
        case ACTION_TYPES.SET_CARD_MAP:
            return {...appState, cardMap: action.payload };
        default:
            return appState;
    }
};
