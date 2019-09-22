import { PATHS } from './App.paths';
import { Redirect, RouteComponentProps } from 'react-router';
import * as React from 'react';
import { Auth } from '../Auth';
import { SignIn } from '../SingIn';
import { Home } from '../Home';

export interface AppRoute {
    path: PATHS;
    render: (params: RouteComponentProps) => any;
    exact?: boolean;
    isProtected?: boolean;
}

export default [
    {
        path: PATHS.SIGN_IN,
        render: (props: RouteComponentProps) => <SignIn {...props}/>,
    },
    {
        path: PATHS.HOME,
        render: (props: RouteComponentProps) => <Home {...props}/>,
        exact: true,
        isProtected: true,
    },
    {
        path: PATHS.AUTH,
        render: (props: RouteComponentProps) => <Auth {...props}/>
    },
    {
        path: PATHS.NOT_FOUND,
        render: () => <h2>Not found!</h2>
    },
    {
        path: PATHS.REDIRECT,
        render: () => <Redirect to={'/404'}/>
    }
];
