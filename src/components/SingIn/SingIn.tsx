import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import withStyles, { WithStyles } from 'react-jss';
import { Page } from '../Page';
import styles from './SingIn.styles';
import { Button } from '../Button';

const key = process.env.REACT_APP_KEY;
const redirectUri = process.env.REACT_APP_AUTH_URL;
const scope = process.env.REACT_APP_SCOPE;
const appName = process.env.REACT_APP_NAME;
const expiration = process.env.REACT_APP_EXPIRATION;
const apiUrl = process.env.REACT_APP_API_URL;

const SignIn: React.FC<RouteComponentProps & WithStyles<typeof styles>> = ({classes}) => {
    const AUTH_URL = `${apiUrl}authorize?expiration=${expiration}&scope=${scope}&response_type=token&name=${appName}&key=${key}&return_url=${redirectUri}`;
    return <Page title={'SIGN IN'}>
        <div className={classes.container}>
            <div className={classes.container}>
                <h1>Trello Clone</h1>
            </div>
            <div className={classes.container}>
                <h4>Description: study project</h4>
            </div>

            <div className={classes.container}>
                <h4>Please sign in to use the service: </h4>
            </div>

            <div className={classes.signInLink}>
                <Button>
                    <a className={classes.signInLink} href={AUTH_URL}>Sign in</a>
                </Button>
            </div>
        </div>
    </Page>;
};

const WrappedWithStylesComponent = withStyles(styles)(SignIn);

export { WrappedWithStylesComponent as SignIn };
