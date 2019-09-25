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
import { BoardModel, } from '../../models';
import { getBoardName } from '../../store/board/selectors';
import { CardModel } from '../../models/CardModel';
import { CardWrapper } from '../CardWrapper';
import { v4 as uuid } from 'uuid';
import { TrelloList } from '../../models/TrelloList';
import { fetchTrelloList } from '../../store/trelloList';
import { fetchCardList, fetchCardMap } from '../../store/card';

interface StateProps {
    id: string;
    board: BoardModel;
    boardName: string;
    cardList: Array<CardModel>;
    cardMap: Map<string, Array<CardModel>>;
    trelloListArray: Array<TrelloList>;
}

interface DispatchProps {
    onFetchBoard: (boardId: string) => void;
    onFetchCardList: (boardId: string) => void;
    onFetchTrelloList: (boardId: string) => void;
    onFetchTrelloMap: () => void;
}

class Board extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
    public state = {
        board: undefined,
        boardName: undefined,
        cardList: [],
        trelloListArray: []
    };

    public componentDidMount = async () => {
        if (this.isValid) {
            const {location} = this.props;
            const board_id = location.pathname.split('board/')[1];
            console.log(board_id);

            this.fetchDate(board_id).then(() => {
                  this.props.onFetchTrelloMap();
              });
        }
    };

    private fetchDate = async (board_id: string) => {
        await this.props.onFetchBoard(board_id);
        await this.props.onFetchCardList(board_id);
        await this.props.onFetchTrelloList(board_id);
    };

    get isValid() {
        return this.props.location.hash.split('=')[1] !== '';
    }

    public render() {
        const {boardName} = this.props;
        return <Page title={'CLONE TRELLO|BOARD'}>
            <h2>{boardName}</h2>
            <div>
                {/*{this.renderCardList()}*/}
                {this.renderTrelloListArray()}
            </div>
        </Page>;
    }

    private renderTrelloListArray = () => {

    };

    private renderCardList = () => {
        return this.props.cardList.map(card => {
              return <CardWrapper key={uuid()}>
                  {card.name}
              </CardWrapper>;
          }
        );
    };

}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        id: state.board.id,
        board: state.board.board,
        boardName: getBoardName(state),
        cardList: state.card.cardList,
        cardMap: state.card.cardMap,
        trelloListArray: state.trelloList.trelloListArray,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
    onFetchBoard: (boardId: string) => dispatch(fetchBoardById(boardId)),
    onFetchCardList: (boardId: string) => dispatch(fetchCardList(boardId)),
    onFetchTrelloList: (boardId: string) => dispatch(fetchTrelloList(boardId)),
    onFetchTrelloMap: () => dispatch(fetchCardMap()),
});

const WrappedWithStylesComponent = withStyles(styles)(Board);

const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedWithStylesComponent);

export { ConnectedComponent as Board };
