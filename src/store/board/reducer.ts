import { Board } from '../../models';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';

export interface BoardState {
    id: string;
    board: Board;
}

const INITIAL_STATE = {
    id: undefined,
    board: undefined
};

export default (appState: BoardState = INITIAL_STATE, action: Action<Board>) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_BOARD_BY_ID:
            return {...appState, id: action.payload };
        case ACTION_TYPES.SET_BOARD:
            return {...appState, board: action.payload };
        default:
            return appState;
    }
};
