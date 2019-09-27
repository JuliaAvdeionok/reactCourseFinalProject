import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../Board/Board.styles';
import { Page } from '../Page';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { connect } from 'react-redux';
import { delBoard, fetchBoardById } from '../../store/board';
import { AppState } from '../../store';
import { BoardModel, } from '../../models';
import { getBoardName } from '../../store/board/selectors';
import { CardModel } from '../../models/CardModel';
import { addTrelloList, fetchTrelloList } from '../../store/trelloList';
import { fetchCardList, fetchCardMap } from '../../store/card';
import { TrelloList } from '../TrelloList';
import { TrelloListModel } from '../../models/TrelloListModel';
import { v4 as uuid } from 'uuid';
import { Button } from '../Button';
import { ToAddModel } from '../../models/ToAddModel';
import { AddForm } from '../ToDoForm';
import { FaTrash } from 'react-icons/fa';

interface StateProps {
    id: string;
    board: BoardModel;
    boardName: string;
    cardList: Array<CardModel>;
    trelloListArray: Array<TrelloListModel>;
}

interface DispatchProps {
    onFetchBoard: (boardId: string) => void;
    onFetchCardList: (boardId: string) => void;
    onFetchTrelloList: (boardId: string) => void;
    onFetchTrelloMap: () => void;
    onDelBoard: (boardId: string) => void;
    onAddTrelloList: (newItem: ToAddModel) => void;
}

class Board extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
    public state = {
        board: undefined,
        boardName: undefined,
        cardList: [],
        trelloListArray: []
    };

    public componentDidMount = () => {
        if (this.isValid) {
            const {location} = this.props;
            const board_id = location.pathname.split('board/')[1];
            this.props.onFetchBoard(board_id);
            this.props.onFetchCardList(board_id);
            this.props.onFetchTrelloList(board_id);
            this.props.onFetchTrelloMap();
        }
    };

    get isValid() {
        return this.props.location.hash.split('=')[1] !== '';
    }

    public render() {
        const {boardName, classes, trelloListArray} = this.props;
        return <Page title={'CLONE TRELLO|BOARD'}>
            <div className={classes.grid}>
                <div>
                    <h2>{boardName}</h2>
                    <Button onClick={this.deleteBoard}><FaTrash/>Detele this board</Button>
                </div>
                <div className={classes.addForm}>
                    <AddForm formName={'Add new list'} onAddItem={this.props.onAddTrelloList} parentId={this.props.id}/>
                </div>
                <div className={classes.boardList}>
                    {
                        trelloListArray.map(item => {
                            const {id, name} = item;
                            return <TrelloList
                              key={uuid()}
                              id={id}
                              name={name}
                            />;
                        })
                    }
                </div>
            </div>
        </Page>;
    }

    private renderTrelloListArray = () => {
        const {trelloListArray} = this.props;
        return trelloListArray.map(item => {
            const {id, name} = item;
            return <TrelloList
              key={uuid()}
              id={id}
              name={name}
            />;
        });
    };

    // private addTrelloList = () => {
    //     const {id} = this.props;
    //     this.props.
    //     this.props.onAddTrelloList(id);
    // }

    private deleteBoard = () => {
        const {id} = this.props;
        this.props.onDelBoard(id);
    };
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        id: state.board.id,
        board: state.board.board,
        boardName: getBoardName(state),
        cardList: state.card.cardList,
        trelloListArray: state.trelloList.trelloListArray,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
    onFetchBoard: (boardId: string) => dispatch(fetchBoardById(boardId)),
    onFetchCardList: (boardId: string) => dispatch(fetchCardList(boardId)),
    onFetchTrelloList: (boardId: string) => dispatch(fetchTrelloList(boardId)),
    onFetchTrelloMap: () => dispatch(fetchCardMap()),
    onDelBoard: (boardId: string) => dispatch(delBoard(boardId)),
    onAddTrelloList: (newItem: ToAddModel) => dispatch(addTrelloList(newItem))
});

const WrappedWithStylesComponent = withStyles(styles)(Board);

// const ConnectedComponent =
//   connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedWithStylesComponent);


const ConnectedComponent =
  withRouter(connect<StateProps, DispatchProps, RouteComponentProps>(mapStateToProps, mapDispatchToProps)(WrappedWithStylesComponent) as any);

export { ConnectedComponent as Board };
