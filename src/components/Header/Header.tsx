import * as React from 'react';
import withStyles, {WithStyles} from 'react-jss';
import styles from './Header.styles';
import {Action, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AppState} from '../../store';
import {signOut} from '../../store/auth';

interface StateProps {
    isSignedIn: boolean;
}

interface DispatchProps {
    onSignOut: () => void;
}

class Header extends React.PureComponent<StateProps & DispatchProps & WithStyles<typeof styles>> {
    public render() {
        const {classes} = this.props;
        return <header className={classes.root}>
            <div className={classes.content}>
                <div>
                    {this.renderAuthControls()}
                </div>
            </div>
        </header>;
    }

    private renderAuthControls = () => {
        if (this.props.isSignedIn) {
            return <>
                <button onClick={this.props.onSignOut}>Sign Out</button>
            </>;
        } else {
            return null;
        }
    };
}

const WrappedHeader = withStyles(styles)(Header);

const mapStateToProps = (state: AppState): StateProps => {
    return {
        isSignedIn: !!state.auth.token
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        onSignOut: () =>  dispatch(signOut()),
    };
};

const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedHeader);

export { ConnectedComponent as Header };
