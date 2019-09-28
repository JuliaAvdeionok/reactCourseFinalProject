import { Store } from 'redux';
import { ApiRequest } from '../../apis/ApiRequest';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { getToken } from '../auth/selectors';
import { setCardList, setCardMap } from './actions';
import { CardModel, UpdateCardModel } from '../../models/CardModel';
import { getCardList, getTrelloListArray } from './selectors';
import { TrelloListModel } from '../../models/TrelloListModel';
import { fetchBoardById } from '../board';

const key = process.env.REACT_APP_KEY;

const fetchCardList = async (id: string, token: string) => {
    try {
        const BOARD_URL = `boards/${id}/cards?&key=${key}&token=${token}`;
        const response = await ApiRequest.get<Array<CardModel>>(BOARD_URL);
        return response;
    } catch (e) {
        throw e;
    }
};

const fetchCardListMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.FETCH_CARD_LIST) {
        const code = action.payload;
        const state = getState();
        const token = getToken(state);
        fetchCardList(code, token).then((list: Array<CardModel>) => {
            dispatch(setCardList(list));
        });
    }

    next(action);
};


const createCardMap = (cardList: Array<CardModel>,
                       trelloListArray: Array<TrelloListModel>): Map<string, Array<CardModel>> => {
    const cardMap = new Map<string, Array<CardModel>>();
    trelloListArray.map(trelloList => trelloList.id)
      .forEach(trelloListId => {
          const filtredCardList = cardList.filter(card => card.idList === trelloListId);
          cardMap.set(trelloListId, filtredCardList);
      });
    return cardMap;
};

const fetchCardMapMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.FETCH_CARD_MAP) {
        const state = getState();
        const cardList = getCardList(state);
        const trelloListArray = getTrelloListArray(state);
        if (cardList.length > 0 && trelloListArray.length > 0) {
            const map = createCardMap(cardList, trelloListArray);
            dispatch(setCardMap(map));
        }
    }

    next(action);
};

const updateCardListId = async (newCard: UpdateCardModel, token: string) => {
    try {
        const UPDATE_LIST_ID_URL = `cards/${newCard.id}/?idList=${newCard.idList}&key=${key}&token=${token}`;
        const response = await ApiRequest.put<CardModel>(UPDATE_LIST_ID_URL);
        return response;
    } catch (e) {
        throw e;
    }
};

const updateCardListIdMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.UPDATE_CARD_LIST_ID) {
        const newCard = action.payload;
        const state = getState();
        const token = getToken(state);
        updateCardListId(newCard, token).then((card: CardModel) => {
            // console.log('newCard' + JSON.stringify(card));
            dispatch(fetchBoardById(card.idBoard));
        });
    }

    next(action);
};

export const cardMiddlewares = [ fetchCardListMiddleware, fetchCardMapMiddleware, updateCardListIdMiddleware ];
