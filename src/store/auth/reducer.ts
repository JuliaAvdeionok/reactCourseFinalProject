import { Action } from '../types';
import {ACTION_TYPES} from './actionsTypes';

export interface AuthState {
    token: string | undefined;
}

const INITIAL_STATE = {
    token: undefined,
};

export default (state: AuthState = INITIAL_STATE, action: Action<string>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_TOKEN:
            return {...state, token: action.payload};
        case ACTION_TYPES.CLEAR_TOKEN:
            return {...INITIAL_STATE};
        default:
            return state;
    }
};
