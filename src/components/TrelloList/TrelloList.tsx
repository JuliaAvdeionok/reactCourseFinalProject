import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../TrelloList/TrelloList.styles';
import { connect } from 'react-redux';
import { CardModel } from '../../models/CardModel';
import { AppState } from '../../store';
import { getCardListById } from '../../store/trelloList/selectors';
import { v4 as uuid } from 'uuid';
import { Card } from '../Card';
import { Button } from '../Button';
import { FaTrash } from 'react-icons/all';
import { Dispatch } from 'redux';
import { Action } from '../../store/types';
import { delTrelloList } from '../../store/trelloList';

export interface TrelloListProps {
    id: string;
    name: string;
}

interface StateProps {
    cardList: Array<CardModel>;
}

interface DispatchProps {
    onDelTrelloList: (listId: string) => void;
}

class TrelloList extends React.PureComponent<TrelloListProps & StateProps & DispatchProps & WithStyles<typeof styles>> {

    public render() {
        const {classes, cardList} = this.props;
        return <div className={classes.listWrapper}>
            <h2> {this.props.name} </h2>
            <div className={classes.delButton}>
                <Button onClick={this.deleteTrelloList}><FaTrash/>Del list</Button>
            </div>
            <div className={classes.cardList}>
                {
                    cardList.map(item => {
                        return <Card key={uuid()} cardItem={item}/>;
                    })
                }
            </div>
        </div>;
    }

    private deleteTrelloList = () => {
        const {id} = this.props;
        this.props.onDelTrelloList(id);
    };

}

const mapStateToProps = (state: AppState, ownProps: TrelloListProps): StateProps => {
    return {
        cardList: getCardListById(state, ownProps)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
    onDelTrelloList: (listId: string) => dispatch(delTrelloList(listId)),
});
const WrappedWithStylesComponent = withStyles(styles)(TrelloList);

const ConnectedComponent =
  connect(mapStateToProps, mapDispatchToProps)(WrappedWithStylesComponent);

export { ConnectedComponent as TrelloList };
