import { ACTION_TYPES } from './actionsTypes';
import { CardModel } from '../../models/CardModel';

export const fetchCardList = (id: string) => ({
    type: ACTION_TYPES.FETCH_CARD_LIST,
    payload: id,
});

export const setCardList = (list: Array<CardModel>) => ({
    type: ACTION_TYPES.SET_CARD_LIST,
    payload: list,
});

export const fetchCardMap = () => ({
    type: ACTION_TYPES.FETCH_CARD_MAP,
});

export const setCardMap = (map: Map<string, Array<CardModel>>) => ({
    type: ACTION_TYPES.SET_CARD_MAP,
    payload: map,
});
