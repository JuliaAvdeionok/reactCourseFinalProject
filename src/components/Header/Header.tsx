import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Header.styles';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { signOut } from '../../store/auth';
import { getIsSignedIn } from '../../store/auth/selectors';
import { PATHS } from '../App/App.paths';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Button } from '../Button';

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
        const link = `${PATHS.HOME}`;
        const {classes} = this.props;
        if (this.props.isSignedIn) {
            return <div className={classes.header}>
                <div>
                    <Button className={classes.root} ><Link key={uuid()} to={link}>Boards</Link></Button>
                </div>
                <div>
                    <Button onClick={this.props.onSignOut}>Sign Out</Button>
                </div>
            </div>;
        } else {
            return null;
        }
    };
}

const WrappedHeader = withStyles(styles)(Header);

const mapStateToProps = (state: AppState): StateProps => {
    return {
        isSignedIn: getIsSignedIn(state)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        onSignOut: () => dispatch(signOut()),
    };
};

const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedHeader);

export { ConnectedComponent as Header };
