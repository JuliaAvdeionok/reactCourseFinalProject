import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { v4 as uuid } from 'uuid';
import { Route, Switch } from 'react-router';

import styles from './App.styles';
import routes, { AppRoute } from './App.routes';
import { ProtectedRoute } from '../ProtectedRoute';

interface State {
}

class App extends React.Component<WithStyles<typeof styles>, State> {
    public state = {};

    public render() {
        const {classes} = this.props;
        return <div className={classes.root}>
            <Switch>
                {
                    routes.map((route: AppRoute) => route.isProtected ? <ProtectedRoute key={uuid()} {...route} /> :
                      <Route key={uuid()} {...route}/>)
                }
            </Switch>
        </div>;

    }

    // private renderNotfound = () => {
    //     return <h2>Not found!</h2>;
    // };
    //
    // private renderRedirect = () => {
    //     return <Redirect to={'/404'}/>;
    // };
    //
    // private renderHome = (props: RouteComponentProps) => {
    //     return <Home {...props}/>;
    // };
    //
    // private renderAuth = (props: RouteComponentProps) => {
    //     return <Auth {...props}/>;
    // };

    // private get isSignedIn(): boolean {
    // console.log('!!this.state.token: ' + !!this.state.token);
    // console.log('!!this.state.token: ' + this.state.token);
    // return !!this.state.token;
    // }

    // private signOut = () => {
    //     this.setState((state) => ({...state, token: undefined}));
    // removeLocalStorage(STORAGE_KEY);
    // };
    //
    // private saveToken = (token: string) => {
    //     this.setState((state: State) => ({...state, token}));
    // setLocalStorage(STORAGE_KEY, JSON.stringify(token));
    // };
    //
    // private readToken = () => {
    // const token = JSON.parse(getLocalStorage(STORAGE_KEY));
    // console.log('token' + token);
    // this.setState((state: State) => ({...state, token}));
    // };

}

const WrappedApp = withStyles(styles)(App);

export { WrappedApp as App };
