import {Store} from 'redux';
import {ACTION_TYPES} from './actionsTypes';
import {ApiRequest} from '../../apis/ApiRequest';
import { Action } from '../types';
import { getToken } from '../auth/selectors';
import { Member } from '../../models/Member';
import { setMember } from './actions';

const key = process.env.REACT_APP_KEY;

const getMemberRequest = async (token: string) => {
    try {
        const MEMBER_URL = `members/me/boards?key=${key}&token=${token}`;
        const response = await ApiRequest.get<Array<Member>>(MEMBER_URL);
        return response;
    } catch (e) {
        throw e;
    }
};

const fetchMemberMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.FETCH_MEMBER) {
        const state = getState();
        const token = getToken(state);
        getMemberRequest(token).then((list: Array<Member>) => {
            dispatch(setMember(list));
        });
    }

    next(action);
};

export const memberMiddlewares = [fetchMemberMiddleware];
