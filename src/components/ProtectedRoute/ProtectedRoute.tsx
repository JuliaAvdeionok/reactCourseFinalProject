import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { PATHS } from '../App/App.paths';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { getIsSignedIn } from '../../store/auth/selectors';

interface StateProps {
    isSignedIn: boolean;
}

const ProtectedRoute: React.FC<StateProps & RouteProps> = ({isSignedIn, ...props}) => {
    return isSignedIn ? <Route {...props} /> : <Redirect to={PATHS.SIGN_IN}/>;
};

const mapStateToProps = (state: AppState) => {
    return {
        isSignedIn: getIsSignedIn(state)
    };
};

const ConnectedProtectedRoute = connect<StateProps, undefined, RouteProps>(mapStateToProps)(ProtectedRoute);

export { ConnectedProtectedRoute as ProtectedRoute };
