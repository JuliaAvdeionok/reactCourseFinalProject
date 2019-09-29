import { AppState } from '../../store';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { connect } from 'react-redux';
import { HomeComponent } from './Home';
import { DispatchProps, HomeProps, StateProps } from './Home.props';
import { fetchMember } from '../../store/member';
import { getMember } from '../../store/member/selectors';
import { onAddBoard } from '../../store/board';
import { ToAddModel } from '../../models/ToAddModel';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: AppState): StateProps => {
    return {
        isSignedIn: !!state.auth.token,
        member: getMember(state)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
    onFetchList: () => dispatch(fetchMember()),
    onAddBoard: (newItem: ToAddModel) => dispatch(onAddBoard(newItem))
});

const HomeConnected =
  withRouter(connect<StateProps, DispatchProps, HomeProps>(mapStateToProps, mapDispatchToProps)(HomeComponent) as any);
export { HomeConnected as Home };
