import withStyles, {WithStyles} from 'react-jss';
import styles from './Home.styles';
import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {connect} from 'react-redux';
import {Header} from '../Header';
import {AppState} from '../../store';
import {Dispatch} from 'redux';
import {Action} from '../../store/types';
import {fetchMember} from '../../store/member';

const key = process.env.REACT_APP_KEY;
const redirectUri = process.env.REACT_APP_API_URL;
const scope = process.env.REACT_APP_SCOPE;
const appName = process.env.REACT_APP_NAME;
const expiration = process.env.REACT_APP_EXPIRATION;

interface StateProps {
    counter: number;
    isSignedIn: boolean;
    member: any;
}

interface DispatchProps {
    onFetchMember: (code: string) => void;
}

class Home extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
    public state = {
        token: undefined,
    };

    public render() {
        return <div>
            <Header/>
            {this.props.isSignedIn ? this.renderAuthorisedContent() : this.renderSignIn()};
            {this.props.counter}
            <h4>this.props.isSignedIn: {this.getBoolean()}</h4>
        </div>;
    }

    private getBoolean = () => {
        const isSin = Boolean(this.props.isSignedIn);
        return JSON.stringify(isSin);
    };

    private renderAuthorisedContent = () => {
        this.props.onFetchMember(this.state.token);

        return <div>
            <h2>Hello user!!</h2>;
        </div>;

    };


    private renderSignIn = () => {
        const AUTH_URL1 = `https://trello.com/1/authorize?expiration=${expiration}&scope=${scope}&response_type=token&name=${appName}&key=${key}&return_url=${redirectUri}`;
        return <div>
            <a href={AUTH_URL1}>Sign in</a>
        </div>;
    };

}

const WrappedWithStylesComponent = withStyles(styles)(Home);

const mapStateToProps = (state: AppState): StateProps => {
    return {
        counter: state.counter.value,
        isSignedIn: !!state.auth.token,
        member: state.member.value
    };
};


const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        onFetchMember: (code: string) => dispatch(fetchMember(code))
    };
};

const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedWithStylesComponent);

export {ConnectedComponent as Home};
