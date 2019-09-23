import { Store } from 'redux';
import { ApiRequest } from '../../apis/ApiRequest';
import { Board } from '../../models';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { getToken } from '../auth/selectors';
import { setBoard } from './actions';

const key = process.env.REACT_APP_KEY;

const fetchByIdMiddleware = async (id: string, token: string) => {
    try {
        const BOARD_URL = `boards/${id}?fields=all&key=${key}&token=${token}`;
        const response = await ApiRequest.get<Board>(BOARD_URL);
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
    if (action.type === ACTION_TYPES.FETCH_BOARD_BY_ID) {
        const code = action.payload;
        const state = getState();
        const token = getToken(state);
        fetchByIdMiddleware(code, token).then((board: Board) => {
            dispatch(setBoard(board));
        });
    }

    next(action);
};

export const boardMiddlewares = [ fetchMiddleware ];
