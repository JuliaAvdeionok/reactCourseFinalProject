import { Store } from 'redux';
import { ApiRequest } from '../../apis/ApiRequest';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { getToken } from '../auth/selectors';
import { setCardList, setCardMap } from './actions';
import { CardModel } from '../../models/CardModel';
import { getCardList, getTrelloListArray } from './selectors';
import { TrelloList } from '../../models/TrelloList';

const key = process.env.REACT_APP_KEY;

const fetchCardListMiddleware = async (id: string, token: string) => {
    try {
        const BOARD_URL = `boards/${id}/cards?&key=${key}&token=${token}`;
        const response = await ApiRequest.get<Array<CardModel>>(BOARD_URL);
        return response;
    } catch (e) {
        throw e;
    }
};

const createCardMapMiddleware = (cardList: Array<CardModel>, trelloListArray: Array<TrelloList>) => {
    let cardMap = new Map<string, Array<CardModel>>();
    debugger;
    const cardModel1: CardModel = {} as CardModel;
    debugger;
    const arr1: Array<CardModel> = [cardModel1];
    debugger;
    cardMap.set('id', arr1);
    debugger;
    console.log('0 not final map: ' + JSON.stringify(cardMap));
    debugger;
    trelloListArray.map(trelloList => trelloList.id)
      .forEach(trelloListId => {
          const filtredCardList = cardList.filter(card => card.idList === trelloListId);
          console.log('trelloListId:' + trelloListId);
          console.log('filtredCardList:' + filtredCardList);
          console.log('1 not final map: ' + JSON.stringify(cardMap));
          cardMap.set(trelloListId, filtredCardList);
          console.log('2 not final map: ' + JSON.stringify(cardMap));
      });
    return cardMap;
};

const fetchMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.FETCH_CARD_LIST) {
        const code = action.payload;
        const state = getState();
        const token = getToken(state);
        fetchCardListMiddleware(code, token).then((list: Array<CardModel>) => {
            dispatch(setCardList(list));
        });
    }

    if (action.type === ACTION_TYPES.FETCH_CARD_MAP) {
        console.log('@1@');
        const state = getState();
        const cardList = getCardList(state);
        const trelloListArray = getTrelloListArray(state);

        if (cardList.length > 0 && trelloListArray.length > 0) {
            console.log('@2@');
            const map = createCardMapMiddleware(cardList, trelloListArray);
            console.log('@3@');
            console.log('map> ' + JSON.stringify(map));
            dispatch(setCardMap(map));
        }
    }

    next(action);
};

export const cardMiddlewares = [ fetchMiddleware ];
