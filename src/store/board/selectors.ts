import { AppState } from '../index';

export const getBoardName = (state: AppState) => state.board.board ? state.board.board.name : '';
