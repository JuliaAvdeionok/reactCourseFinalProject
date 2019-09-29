import { ACTION_TYPES } from './actionsTypes';
import { Member } from '../../models';

export const setMember = (member: Array<Member>) => ({
    type: ACTION_TYPES.SET_MEMBER,
    payload: member,
});

export const fetchMember = () => ({
    type: ACTION_TYPES.FETCH_MEMBER,
});
