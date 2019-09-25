import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../Header/Header.styles';
import { CardModel } from '../../models/CardModel';

interface StateProps {
    card: CardModel;
}

interface DispatchProps {

}

class TrelloList extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {

    public state = {
        card: undefined
    };

    public componentDidMount = async () => {
        // this.props.onFetchBoard(board_id);
    };

    // get isValid() {
    // return this.props.location.hash.split('=')[1] !== '';
    // }

    public render() {
        return <h2>List</h2>;
        // const {boardName} = this.props;
        // return <Page title={'CLONE TRELLO|BOARD'}>
        // <h2>{boardName}</h2>
        // </Page>;
    }
}

// const mapStateToProps = (state: AppState): StateProps => {
//     return {
// id: state.board.id,
// board: state.board.board,
// boardName: getBoardName(state)
// };
// };
// const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => ({
//     onFetchBoard: (boardId: string) => dispatch(fetchBoardById(boardId))
// });

const WrappedWithStylesComponent = withStyles(styles)(TrelloList);

// const ConnectedComponent = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(WrappedWithStylesComponent);

export { WrappedWithStylesComponent as TrelloList };

