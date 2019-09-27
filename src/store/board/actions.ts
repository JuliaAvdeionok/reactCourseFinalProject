import { BoardModel } from '../../models';
import { ACTION_TYPES } from './actionsTypes';
import { ToAddModel } from '../../models/ToAddModel';

export const fetchBoard = (list: Array<BoardModel>) => ({
    type: ACTION_TYPES.FETCH_BOARD,
    payload: list,
});

export const fetchBoardById = (id: string) => ({
    type: ACTION_TYPES.FETCH_BOARD_BY_ID,
    payload: id,
});

export const setBoard = (board: BoardModel) => ({
    type: ACTION_TYPES.SET_BOARD,
    payload: board,
});

export const onAddBoard = (newBoard: ToAddModel) => ({
    type: ACTION_TYPES.ADD_BOARD,
    payload: newBoard
});

export const delBoard = (id: string) => ({
    type: ACTION_TYPES.DEL_BOARD,
    payload: id,
});
