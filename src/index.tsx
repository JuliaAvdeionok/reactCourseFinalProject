import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {App} from './components/App';
import {ThemeProvider} from 'react-jss';
import {theme} from './styles';
import createStore from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <Provider store={store}>
                    <App/>
                </Provider>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
