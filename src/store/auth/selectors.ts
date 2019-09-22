import { AppState } from '../index';

export const getIsSignedIn = (state: AppState): boolean => !!state.auth.token;
export const getToken = (state: AppState): string => state.auth.token;
