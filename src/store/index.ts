// @ts-ignore
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import counter, { counterMiddlewares, CounterState } from './counter';
import auth, { authMiddlewares, AuthState } from './auth';
import member, {memberMiddlewares, MemberState} from './member';

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export interface AppState {
    counter: CounterState;
    auth: AuthState;
    member: MemberState;
}

const rootReducer = (history: History) => combineReducers(
    {
        counter,
        auth,
        member,
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
                ...counterMiddlewares,
                ...authMiddlewares,
                ...memberMiddlewares
            )
        )
    );
};
