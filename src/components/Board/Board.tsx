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
import { BoardModel } from '../../models';
import { getBoardName } from '../../store/board/selectors';

interface StateProps {
    id: string;
    board: BoardModel;
    boardName: string;
}

interface DispatchProps {
    onFetchBoard: (boardId: string) => void;
}

class Board extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
    public state = {
        board: undefined,
        boardName: undefined
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
        const {boardName} = this.props;
        return <Page title={'CLONE TRELLO|BOARD'}>
            <h2>{boardName}</h2>
        </Page>;
    }
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        id: state.board.id,
        board: state.board.board,
        boardName: getBoardName(state)
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onFetchBoard: (boardId: string) => dispatch(fetchBoardById(boardId))
});

const WrappedWithStylesComponent = withStyles(styles)(Board);

const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedWithStylesComponent);

export { ConnectedComponent as Board };
