import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../Header/Header.styles';
import { Page } from '../Page';
import { RouteComponentProps } from 'react-router';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { connect } from 'react-redux';
import { fetchBoardById } from '../../store/board';
import { AppState } from '../../store';

export interface HomeProps {
}

export interface StateProps {
    board: Board;
}

interface DispatchProps {
    onFetchBoard: (boardId: string) => void;
}

class Board extends React.PureComponent<HomeProps & StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
    public state = {
        board: undefined,
    };

    public componentDidMount = async () => {
        if (this.isValid) {
            const {location} = this.props;
            const board_id = location.pathname.split('board/')[1];
            console.log(board_id);
            this.props.onFetchBoard(board_id);
        }
    };

    get isValid() {
        return this.props.location.hash.split('=')[1] !== '';
    }


    public render() {
        const {location} = this.props;
        console.log('LOCATION' + JSON.stringify(location));
        return <Page title={'CLONE TRELLO|BOARD'}>
            <h2>Hello in board!</h2>
        </Page>;
    }
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        board: state.board.board
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onFetchBoard: (boardId: string) => dispatch(fetchBoardById(boardId))
});

const WrappedWithStylesComponent = withStyles(styles)(Board);

const ConnectedComponent = connect<StateProps, DispatchProps, HomeProps>(mapStateToProps, mapDispatchToProps)(WrappedWithStylesComponent);

export { ConnectedComponent as Board };
