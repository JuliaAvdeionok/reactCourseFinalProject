import { Action } from '../types';
import { ACTION_TYPES } from './actionsTypes';
import { DnDResult } from '../../models/DnDResult';

export interface DragState {
    result: DnDResult;
}

export const INITIAL_STATE = {
    result: undefined,
};

export default (appState: DragState = INITIAL_STATE, action: Action<DragState>) => {
    switch (action.type) {
        case ACTION_TYPES.SET_DRAG:
            return {...appState, result: action.payload};
        default:
            return appState;
    }
};
