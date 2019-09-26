import {Store} from 'redux';
import {ACTION_TYPES} from './actionsTypes';
import {ApiRequest} from '../../apis/ApiRequest';
import { setList } from './actions';
import { Action } from '../types';
import { getToken } from '../auth/selectors';
import { Member } from '../../models/Member';

const key = process.env.REACT_APP_KEY;

const fetchMember = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => async (action: Action<any>) => {
    if (action.type === ACTION_TYPES.FETCH_LIST) {
        try {
            const state = getState();
            const token = getToken(state);
            const MEMBER_URL = `members/me/boards?key=${key}&token=${token}`;
            const response = await ApiRequest.get<Array<Member>>(MEMBER_URL);
            dispatch(setList(response));
        } catch (e) {
            throw e;
        }
    }

    next(action);
};

export const memberMiddlewares = [fetchMember];
