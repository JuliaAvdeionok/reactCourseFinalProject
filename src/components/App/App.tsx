import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { v4 as uuid } from 'uuid';
import { Route, Switch } from 'react-router-dom';

import styles from './App.styles';
import routes, { AppRoute } from './App.routes';
import { ProtectedRoute } from '../ProtectedRoute';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { fetchIsSingIn } from '../../store/auth';
import { connect } from 'react-redux';

interface DispatchProps {
    onCheckLocalStorage: () => void;
}

class App extends React.Component<DispatchProps & WithStyles<typeof styles>> {

    constructor(props) {
        super(props);
        this.props.onCheckLocalStorage();
    }

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

}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        onCheckLocalStorage: () => dispatch(fetchIsSingIn()),
    };
};

const WrappedApp = withStyles(styles)(App);

const ConnectedApp = connect<undefined, DispatchProps>(undefined, mapDispatchToProps)(WrappedApp);

export { ConnectedApp as App };
