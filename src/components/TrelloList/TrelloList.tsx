import * as React from 'react';
import { Dispatch } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../TrelloList/TrelloList.styles';
import { CardModel } from '../../models/CardModel';
import { v4 as uuid } from 'uuid';
import { Card } from '../Card';
import { Action } from '../../store/types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { delTrelloList } from '../../store/trelloList';
import { getCardListById } from '../../store/trelloList/selectors';
import { AppState } from '../../store';
import { connect } from 'react-redux';

export interface TrelloListProps {
    id: string;
    name: string;
    index: number;
    isDagged?: boolean;
}

interface StateProps {
    cardList: Array<CardModel>;
}

interface DispatchProps {
    onDelTrelloList: (listId: string) => void;
}

class TrelloList extends React.PureComponent<TrelloListProps & StateProps & DispatchProps & WithStyles<typeof styles>> {

    public render() {
        const {classes} = this.props;
        return <Droppable className={classes.cardList} droppableId={this.props.id}>
            {(provided, snapshot) => (
              <div className={snapshot.isDraggingOver ? classes.listDreggedOver : classes.listContainer}
                {...provided.droppableProps}
                ref={provided.innerRef}>
                  {
                      <div className={classes.listWrapper}>
                          <h2> {this.props.name} </h2>
                          {this.renderCardList()}
                          <div className={classes.delButton}>
                              {/*<Button onClick={this.deleteTrelloList}><FaTrash/>Del list</Button>*/}
                          </div>
                      </div>}
                  {provided.placeholder}
              </div>
            )
            }
        </Droppable>;
    }

    private renderCardList = () => {
        const {classes, cardList} = this.props;
        return <div className={classes.cardList}>
            {
                cardList.map((item, index) => {
                    return <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            className={snapshot.isDragging ? classes.containerDregged : classes.container}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                              <Card key={uuid()} cardItem={item} index={index} isDragging={snapshot.isDagged}/>
                          </div>
                        )}
                    </Draggable>;
                })
            }
        </div>;
    };

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
