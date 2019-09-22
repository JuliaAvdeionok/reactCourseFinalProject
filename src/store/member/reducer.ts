import { Action } from '../types';
import {ACTION_TYPES} from './actionsTypes';

export interface MemberState {
    value: any;
}

const INITIAL_STATE = {
    value: undefined,
};

export default (appState: MemberState = INITIAL_STATE, action: Action<any>) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_MEMBER:
            return {...appState, value: action.payload };
        case ACTION_TYPES.SET_MEMBER:
            return {...appState, value: action.payload };
        default:
            return appState;
    }
};
