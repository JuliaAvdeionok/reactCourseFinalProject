import {Redirect, RouteComponentProps} from 'react-router';
import * as React from 'react';

interface AuthProps {
    onSuccess: (token: string) => void;
}

export class Auth extends React.Component<AuthProps & RouteComponentProps> {
    public componentDidMount = async () => {
        if (this.isValid) {
            this.getToken();
        }
    };

    public render() {
        // const {location} = this.props;
        if (this.isValid) {
            // const code = location.search.split('=')[1];
            return <div>
                <button onClick={this.getToken}>GET TOKEN</button>
            </div>;
        }
        return <Redirect to={'/'}/>;
    }

    private getToken = async () => {
        try {
            const token = this.props.location.hash.split('=')[1];
            console.log('******');
            console.log('token:' + token);
            console.log('******');
            console.log('******');
            this.props.onSuccess(token);
            this.props.history.push('/');
        } catch (e) {
            throw e;
        }
    };

    get isValid() {
        console.log('+++++++');
        console.log('' + this.props.location.hash.split('=')[1] !== '');
        console.log('+++++++');
        return this.props.location.hash.split('=')[1] !== '';
    }

}
