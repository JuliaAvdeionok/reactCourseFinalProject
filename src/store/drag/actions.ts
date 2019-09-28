import { ACTION_TYPES } from './actionsTypes';
import { DnDResult } from '../../models/DnDResult';

export const setDrag = (result: DnDResult) => ({
    type: ACTION_TYPES.SET_DRAG,
    payload: result,
});
