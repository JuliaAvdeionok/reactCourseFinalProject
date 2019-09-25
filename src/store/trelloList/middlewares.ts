import { Store } from 'redux';
import { ApiRequest } from '../../apis/ApiRequest';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { getToken } from '../auth/selectors';
import { TrelloList } from '../../models/TrelloList';
import { setTrelloList } from './actions';

const key = process.env.REACT_APP_KEY;

const fetchTrelloListMiddleware = async (id: string, token: string) => {
    try {
        const BOARD_URL = `boards/${id}/lists?&key=${key}&token=${token}`;
        const response = await ApiRequest.get<Array<TrelloList>>(BOARD_URL);
        console.log('^^^^^^^^^^^^^^^^^^^^^^');
        console.log('^^^^^^^^^^^^^^^^^^^^^^');
        console.log('response: ' + JSON.stringify(response));
        console.log('^^^^^^^^^^^^^^^^^^^^^^');
        console.log('^^^^^^^^^^^^^^^^^^^^^^');
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
        fetchTrelloListMiddleware(code, token).then((list: Array<TrelloList>) => {
            dispatch(setTrelloList(list));
        });
    }

    next(action);
};

export const trelloListMiddlewares = [ fetchMiddleware ];
