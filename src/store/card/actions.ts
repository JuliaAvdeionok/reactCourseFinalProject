import { ACTION_TYPES } from './actionsTypes';
import { CardModel, UpdateCardModel } from '../../models/CardModel';
import { ToAddModel } from '../../models/ToAddModel';

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

export const addCard = (newCard: ToAddModel) => ({
    type: ACTION_TYPES.ADD_CARD,
    payload: newCard
});

export const updateCardListId = (newCard: UpdateCardModel) => ({
    type: ACTION_TYPES.UPDATE_CARD_LIST_ID,
    payload: newCard
});

export const delCard = (delCard: CardModel) => ({
    type: ACTION_TYPES.DEL_CARD,
    payload: delCard
});
