import * as React from 'react';
import withStyles, {WithStyles} from 'react-jss';
import styles from './Header.styles';
import {Action, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {decreaseCounter, increaseCounter} from '../../store/actions';

interface HeaderProps {
    isSignedIn: boolean;
    onSignOut: () => void;
}

interface DispatchProps {
    onIncrease: () => void;
    onDecrease: () => void;
}

class Header extends React.PureComponent<HeaderProps & DispatchProps & WithStyles<typeof styles>> {
    public render() {
        const {classes} = this.props;
        return <header className={classes.root}>
            <div className={classes.content}>
                <nav>
                    <button onClick={this.props.onIncrease}>+</button>
                    <button onClick={this.props.onDecrease}>-</button>
                </nav>
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

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
    return {
        onIncrease: () => dispatch(increaseCounter()),
        onDecrease: () => dispatch(decreaseCounter()),
    };
};

const ConnectedComponent = connect<undefined, DispatchProps, HeaderProps>(undefined, mapDispatchToProps)(WrappedHeader);

export {ConnectedComponent as Header};
