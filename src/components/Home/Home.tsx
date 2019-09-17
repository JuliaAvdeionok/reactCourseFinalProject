import withStyles, {WithStyles} from 'react-jss';
import styles from './Home.styles';
import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {ApiRequest} from '../../apis/ApiRequest';
import {connect} from 'react-redux';
import {AppState} from '../../store/reducer';
import {Header} from '../Header';

const key = process.env.REACT_APP_KEY;
const redirectUri = process.env.REACT_APP_API_URL;
const scope = process.env.REACT_APP_SCOPE;
const appName = process.env.REACT_APP_NAME;
const expiration = process.env.REACT_APP_EXPIRATION;

interface HomeProps {
    isSignedIn: boolean;
    onSignOut: () => void;
}

interface State {
    token: string;
}

interface StateProps {
    counter: number;
}

const STORAGE_KEY = 'TOKEN';

class Home extends React.PureComponent<HomeProps & StateProps & RouteComponentProps & WithStyles<typeof styles>> {
    public state = {
        token: undefined,
    };

    public render() {
        return <div>
            <Header isSignedIn={this.props.isSignedIn} onSignOut={this.props.onSignOut}/>
            {this.props.isSignedIn ? this.renderAuthorisedContent() : this.renderSignIn()};
            {this.props.counter}
        </div>;
    }

    private renderAuthorisedContent = () => {

        this.getMemberInfo();
        // const validToken = this.readToken();

        return <h2>Hello user!!</h2>;
    };

    private getMemberInfo = async () => {
        try {
            const validToken = this.state.token;
            console.log('validToken:' + this.state.token);
            console.log('key:' + key);
            const AUTH_URL = `https://api.trello.com/1/members/me/boards?key=${key}&token=${validToken}`;
            const boards = await ApiRequest.get(AUTH_URL);
            console.log('^^^^^^^^^^^^^^^^^^^^^^');
            console.log('^^^^^^^^^^^^^^^^^^^^^^');
            console.log('boards: ' + JSON.stringify(boards));
            console.log('^^^^^^^^^^^^^^^^^^^^^^');
            console.log('^^^^^^^^^^^^^^^^^^^^^^');
            // this.setPhotos(photos);
        } catch (e) {
            throw e;
        }
    };

    private renderSignIn = () => {
        const AUTH_URL1 = `https://trello.com/1/authorize?expiration=${expiration}&scope=${scope}&response_type=token&name=${appName}&key=${key}&return_url=${redirectUri}`;
        return <div>
            <a href={AUTH_URL1}>Sign in</a>
        </div>;
    };

    // private readToken = () => {
    //     const token = JSON.parse(getLocalStorage(STORAGE_KEY));
    //     console.log('token' + token);
    //     this.setState((state: State) => ({...state, token}));
    //     return token;
    // }

}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        counter: state.counter
    };
};

const WrappedWithStylesComponent = withStyles(styles)(Home);
const ConnectedComponent = connect<StateProps, HomeProps>(mapStateToProps)(WrappedWithStylesComponent);

export {ConnectedComponent as Home};
