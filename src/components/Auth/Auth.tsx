import {Redirect, RouteComponentProps} from 'react-router';
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Action} from '../../store/types';
import { setToken } from '../../store/auth';
import { PATHS } from '../App/App.paths';

interface DispatchProps {
    onFetchToken: (code: string) => void;
}

class Auth extends React.Component<DispatchProps & RouteComponentProps> {
    public componentDidMount = async () => {
        if (this.isValid) {
            const { location } = this.props;
            this.props.onFetchToken(location.hash.split('=')[1]);
        } else {
            console.log('FFFFFFFF token not valid');
        }
    };

    public render() {
        // const {location} = this.props;
        if (!this.isValid) {
            // const code = location.search.split('=')[1];
            // return <div>
            //     {/*<button onClick={this.getToken}>GET TOKEN</button>*/}
            // </div>;

            return <h3>in Auth</h3>;
        }
        return <Redirect to={PATHS.HOME}/>;
    }

    get isValid() {
        console.log('+++++++');
        console.log('' + this.props.location.hash.split('=')[1] !== '');
        console.log('+++++++');
        return this.props.location.hash.split('=')[1] !== '';
    }

}

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onFetchToken: (code: string) => dispatch(setToken(code))
});

const ConnectedAuth = connect<undefined, DispatchProps>(undefined, mapDispatchToProps)(Auth);

export {ConnectedAuth as Auth};
