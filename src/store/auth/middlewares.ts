import { Store } from 'redux';
import { Action } from '../types';
import { setToken } from './actions';
import { push } from 'connected-react-router';
import { ACTION_TYPES } from './actionsTypes';
import { PATHS } from '../../components/App/App.paths';
import { getLocalStorage, localStorageExists, removeLocalStorage, setLocalStorage } from '../../util/storages';
import { getIsSignedIn } from './selectors';

const STORAGE_KEY = process.env.REACT_APP_STORAGE_KEY;
const signOutMiddleware = ({dispatch}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.SIGN_OUT) {
        dispatch(setToken(undefined));
        removeLocalStorage(STORAGE_KEY);
        dispatch(push(PATHS.SIGN_IN));
    }

    next(action);
};

const isSignInMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => {
    return (action: Action<any>) => {
        if (action.type === ACTION_TYPES.FETCH_IS_SING_IN) {

            const state = getState();
            const isSignedIn = getIsSignedIn(state);

            if (!isSignedIn && localStorageExists(STORAGE_KEY)) {
                const token = JSON.parse(getLocalStorage(STORAGE_KEY));
                console.log('in FETCH_IS_SING_IN token: ' + !!token);
                dispatch(setToken(token));
            }
        }

        next(action);
    };
};

const setTokenMiddleware = ({dispatch}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    if (action.type === ACTION_TYPES.SET_TOKEN) {
        const token = action.payload;
        console.log('STORAGE_KEY:' + STORAGE_KEY);
        if (!localStorageExists(STORAGE_KEY)) {
            setLocalStorage(STORAGE_KEY, JSON.stringify(token));
        }

    }

    next(action);
};

export const authMiddlewares = [ signOutMiddleware, isSignInMiddleware, setTokenMiddleware ];
