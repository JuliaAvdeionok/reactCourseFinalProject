import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { PATHS } from '../App/App.paths';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { fetchIsSingIn } from '../../store/auth';
import { getIsSignedIn } from '../../store/auth/selectors';
import { AppState } from '../../store';

interface StateProps {
    isSignedIn: boolean;
}

interface DispatchProps {
    fetchIsSignedIn: () => void;
}

class ProtectedRoute extends React.Component<StateProps & DispatchProps> {
    public componentDidMount = async () => {
        await this.props.fetchIsSignedIn();
    };

    public render() {
        console.log('render in ProtectedRoute');
        this.props.fetchIsSignedIn();
        console.log('this.props.isSignedIn:' + this.props.isSignedIn);
        return this.props.isSignedIn ? <Route {...this.props} /> : <Redirect to={PATHS.SIGN_IN}/>;
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        isSignedIn: getIsSignedIn(state)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        fetchIsSignedIn: () => dispatch(fetchIsSingIn()),
    };
};

const ConnectedProtectedRoute = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ProtectedRoute);

export { ConnectedProtectedRoute as ProtectedRoute };
