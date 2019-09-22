import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { DispatchProps, StateProps } from './Home.props';
import { Page } from '../Page';

class Home extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
    public state = {
        token: undefined,
    };

    public componentDidMount(): void {
        console.log('componentDidMount in Home');
        this.props.onFetchList();
    }

    public render() {
        const {classes} = this.props;
        return <Page title={'CLONE TRELLO|HOME'}>
            <div className={classes.container}>
                <h2>Hello user</h2>
            </div>
        </Page>;
    }
}

const WrappedWithStylesComponent = withStyles(styles)(Home);
export { WrappedWithStylesComponent as HomeComponent };
