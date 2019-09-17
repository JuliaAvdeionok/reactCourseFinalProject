import * as React from 'react';
import withStyles, {WithStyles} from 'react-jss';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router';

import styles from './App.styles';
import {Home} from '../Home';
import {Auth} from '../Auth';
import {getLocalStorage, setLocalStorage, removeLocalStorage} from '../../util/storages';

// const key = process.env.REACT_APP_KEY;

interface State {
    token: string | undefined;
}

const STORAGE_KEY = 'TOKEN';

class App extends React.Component<WithStyles<typeof styles>, State> {
    public state = {
        token: undefined,
    };

    public componentWillMount = () => {
        this.readToken();

    };

    // private fetchPhotos = async () => {

        // try {
        //     // const validToken = this.state.token;
        //     console.log('validToken:' + validToken);
        //     console.log('key:' + key);
        //     const AUTH_URL = `https://api.trello.com/1/members/me/boards?key=${key}&token=${validToken}`;
        //     const boards = await ApiRequest.get(AUTH_URL);
        //     console.log('^^^^^^^^^^^^^^^^^^^^^^');
        //     console.log('^^^^^^^^^^^^^^^^^^^^^^');
        //     console.log('boards: ' + JSON.stringify(boards));
        //     console.log('^^^^^^^^^^^^^^^^^^^^^^');
        //     console.log('^^^^^^^^^^^^^^^^^^^^^^');
        //     // this.setPhotos(photos);
        // } catch (e) {
        //     throw e;
        // }

    // };


    public render() {
        const {classes} = this.props;
        return <div className={classes.root}>
            <Switch>
                <Route exact={true} path={'/'}
                       render={(props: RouteComponentProps) =>
                           <Home {...props}
                                 isSignedIn={this.isSignedIn}
                                 onSignOut={ this.signOut }/>
                       }/>
                <Route path={'/about'} render={(props: RouteComponentProps) => <h1>{props.location.pathname}</h1>}/>
                <Route path={'/auth'} render={this.renderAuth}/>
                <Route path={'/404'} render={() => <h2>Not found!</h2>}/>
                <Route path={'/*'} render={() => <Redirect to={'/404'}/>}/>
            </Switch>
        </div>;

    }

    private get isSignedIn(): boolean {
        console.log('!!this.state.token: ' + !!this.state.token);
        console.log('!!this.state.token: ' + this.state.token);
        return !!this.state.token;
    }

    private signOut = () => {
        this.setState((state) => ({ ...state, token: undefined }));
        removeLocalStorage(STORAGE_KEY);
    };


    private renderAuth = (props: RouteComponentProps) => {
        return <Auth {...props} onSuccess={this.saveToken}/>;
    };

    private saveToken = (token: string) => {
        this.setState((state: State) => ({...state, token}));
        setLocalStorage(STORAGE_KEY, JSON.stringify(token));
    };

    private readToken =  () => {
        const token = JSON.parse(getLocalStorage(STORAGE_KEY));
        console.log('token' + token);
        this.setState((state: State) => ({...state, token}));
    }

}

const WrappedApp = withStyles(styles)(App);

export {WrappedApp as App};
