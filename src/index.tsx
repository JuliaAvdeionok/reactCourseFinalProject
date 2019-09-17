import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './store/reducer';

import {App} from './components/App';
import {ThemeProvider} from 'react-jss';
import {theme} from './styles';
import {BrowserRouter as Router} from 'react-router-dom';

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware()));

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
);
