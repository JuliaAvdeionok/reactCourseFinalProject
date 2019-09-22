import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { connect } from 'react-redux';
import { HomeComponent } from './Home';
import { DispatchProps, HomeProps, StateProps } from './Home.props';
import { fetchList } from '../../store/member';
import { getMember } from '../../store/member/selectors';

const mapStateToProps = (state: AppState): StateProps => {
    return {
        isSignedIn: !!state.auth.token,
        member: getMember(state)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onFetchList: () => dispatch(fetchList())
});

const HomeConnected = connect<StateProps, DispatchProps, HomeProps>(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { HomeConnected as Home };
