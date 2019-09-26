import { Store } from 'redux';
import { ApiRequest } from '../../apis/ApiRequest';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { getToken } from '../auth/selectors';
import { TrelloListModel } from '../../models/TrelloListModel';
import { setTrelloList } from './actions';

const key = process.env.REACT_APP_KEY;

const fetchTrelloListMiddleware = async (id: string, token: string) => {
    try {
        const BOARD_URL = `boards/${id}/lists?&key=${key}&token=${token}`;
        const response = await ApiRequest.get<Array<TrelloListModel>>(BOARD_URL);
        return response;
    } catch (e) {
        throw e;
    }
};

const fetchMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.FETCH_TRELLO_LIST) {
        const code = action.payload;
        const state = getState();
        const token = getToken(state);
        fetchTrelloListMiddleware(code, token).then((list: Array<TrelloListModel>) => {
            dispatch(setTrelloList(list));
        });
    }

    next(action);
};

export const trelloListMiddlewares = [ fetchMiddleware ];
