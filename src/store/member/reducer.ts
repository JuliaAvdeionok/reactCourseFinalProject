import { Action } from '../types';
import {ACTION_TYPES} from './actionsTypes';
import { Member } from '../../models';

export interface MemberState {
    list: Array<Member>;
}

export const INITIAL_STATE = {
    list: []
};

export default (appState: MemberState = INITIAL_STATE, action: Action<Array<any>>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_LIST:
            return {...appState, list: action.payload };
        default:
            return appState;
    }
};
