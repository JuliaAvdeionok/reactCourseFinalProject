import { Store } from 'redux';
import { Action } from '../types';

// const key = process.env.REACT_APP_KEY;


const setDragMiddleware = ({dispatch, getState}: Store) => (next: (action: Action<any>) => void) => (action: Action<any>) => {
    // if (action.type === ACTION_TYPES.FETCH_CARD_LIST) {
    //     const code = action.payload;
    //     const state = getState();
    //     const token = getToken(state);
    //     fetchCardList(code, token).then((list: Array<CardModel>) => {
    //         dispatch(setCardList(list));
    //     });
    // }

    next(action);
};

export const dragMiddlewares = [ setDragMiddleware ];
