import { Store } from 'redux';
import { ApiRequest } from '../../apis/ApiRequest';
import { BoardModel } from '../../models';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { getToken } from '../auth/selectors';
import { setBoard } from './actions';
import { ToAddModel } from '../../models/ToAddModel';
import { fetchMember } from '../member';
import { push } from 'connected-react-router';
import { PATHS } from '../../components/App/App.paths';

const key = process.env.REACT_APP_KEY;

const fetchById = async (id: string, token: string) => {
    try {
        const BOARD_URL = `boards/${id}?fields=all&key=${key}&token=${token}`;
        const response = await ApiRequest.get<BoardModel>(BOARD_URL);
        return response;
    } catch (e) {
        throw e;
    }
};

const fetchByIdMiddleware =
  ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
      if (action.type === ACTION_TYPES.FETCH_BOARD_BY_ID) {
          const code = action.payload;
          const state = getState();
          const token = getToken(state);
          fetchById(code, token).then((board: BoardModel) => {
              dispatch(setBoard(board));
          });
      }

      next(action);
  };

const postBoard = async (board: ToAddModel, token: string) => {
    try {
        const BOARD_URL = `boards/?name=${board.name}&key=${key}&token=${token}`;
        const response = await ApiRequest.post(BOARD_URL);
        return response;
    } catch (e) {
        throw e;
    }
};

const postBoardMiddleware =
  ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
      if (action.type === ACTION_TYPES.ADD_BOARD) {
          const newBoard = action.payload;
          const state = getState();
          const token = getToken(state);
          postBoard(newBoard, token).then((board: BoardModel) => {
              dispatch(fetchMember());
          });
      }

      next(action);
  };

const delBard = async (id: string, token: string) => {
    try {
        const BOARD_URL = `boards/${id}?key=${key}&token=${token}`;
        const response = await ApiRequest.delete(BOARD_URL);
        return response;
    } catch (e) {
        throw e;
    }
};

const delBoardMiddleware =
  ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
      if (action.type === ACTION_TYPES.DEL_BOARD) {
          const id = action.payload;
          const state = getState();
          const token = getToken(state);
          delBard(id, token).then(() => {
              dispatch(push(PATHS.HOME));
              dispatch(fetchMember());
          });
      }

      next(action);
  };

export const boardMiddlewares = [ fetchByIdMiddleware, postBoardMiddleware, delBoardMiddleware ];
