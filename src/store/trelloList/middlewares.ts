import { Store } from 'redux';
import { ApiRequest } from '../../apis/ApiRequest';
import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { getToken } from '../auth/selectors';
import { TrelloListModel } from '../../models/TrelloListModel';
import { fetchTrelloList, setTrelloList } from './actions';
import { ToAddModel } from '../../models/ToAddModel';

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

const postTrelloList = async (newList: ToAddModel, token: string) => {
    try {
        const TRELLO_LIST = `boards/${newList.parentId}/lists?name=${newList.name}&key=${key}&token=${token}`;
        const response = await ApiRequest.post(TRELLO_LIST);
        return response;
    } catch (e) {
        throw e;
    }
};

const postTrelloListMiddleware =
  ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
      if (action.type === ACTION_TYPES.ADD_TRELLO_LIST) {
          const newList = action.payload;
          const state = getState();
          const token = getToken(state);
          postTrelloList(newList, token).then((list: TrelloListModel) => {
              dispatch(fetchTrelloList(list.idBoard));
          });
      }

      next(action);
  };

const delTrelloList = async (id: string, token: string) => {
    try {
        const DEL_TRELLO_LIST = `lists/${id}/closed?key=${key}&token=${token}`;
        const response = await ApiRequest.put(DEL_TRELLO_LIST);
        return response;
    } catch (e) {
        throw e;
    }
};

const delTrelloListMiddleware =
  ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
      if (action.type === ACTION_TYPES.DEL_TRELLO_LIST) {
          const id = action.payload;
          const state = getState();
          const token = getToken(state);
          delTrelloList(id, token).then((list: TrelloListModel) => {
              console.log('list: ' + JSON.stringify(list));
              dispatch(fetchTrelloList(list.idBoard));
          });
      }

      next(action);
  };

export const trelloListMiddlewares = [ fetchMiddleware, postTrelloListMiddleware, delTrelloListMiddleware ];
