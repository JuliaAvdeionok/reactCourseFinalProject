import { AppState } from '../index';

export const getMember = (state: AppState): Array<any> => state.member.list;
