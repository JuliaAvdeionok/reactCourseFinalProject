import { BoardModel } from '../../models';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';

export interface BoardState {
    id: string;
    board: BoardModel;
}

export const INITIAL_STATE = {
    id: undefined,
    board: undefined
};

export default (appState: BoardState = INITIAL_STATE, action: Action<BoardModel>) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_BOARD_BY_ID:
            return {...appState, id: action.payload };
        case ACTION_TYPES.SET_BOARD:
            return {...appState, board: action.payload };
        case ACTION_TYPES.ADD_BOARD:
            return {...appState };
        case ACTION_TYPES.DEL_BOARD:
            return {...appState, id: action.payload };
        default:
            return appState;
    }
};
