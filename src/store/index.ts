// @ts-ignore
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import auth, { authMiddlewares, AuthState } from './auth';
import member, { memberMiddlewares, MemberState } from './member';
import board, { boardMiddlewares, BoardState } from './board';
import card, { cardMiddlewares, CardState } from './card';
import trelloList, { trelloListMiddlewares, TrelloListState } from './trelloList';

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  // @ts-ignore
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

export interface AppState {
    auth: AuthState;
    member: MemberState;
    board: BoardState;
    card: CardState;
    trelloList: TrelloListState;
}

const rootReducer = (history: History) => combineReducers(
  {
      auth,
      member,
      board,
      card,
      trelloList,
      router: connectRouter(history),
  }
);

export default (history) => {
    return createStore(
      rootReducer(history),
      undefined,
      composeEnhancers(
        // @ts-ignore
        applyMiddleware(
          routerMiddleware(history),
          ...authMiddlewares,
          ...memberMiddlewares,
          ...boardMiddlewares,
          ...cardMiddlewares,
          ...trelloListMiddlewares,
        )
      )
    );
};
