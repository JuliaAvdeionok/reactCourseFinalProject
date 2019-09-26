import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../TrelloList/TrelloList.styles';
import { connect } from 'react-redux';
import { CardModel } from '../../models/CardModel';
import { AppState } from '../../store';
import { getCardListById } from '../../store/trelloList/selectors';
import { v4 as uuid } from 'uuid';
import { Card } from '../Card';

export interface TrelloListProps {
    id: string;
    name: string;
}

interface StateProps {
    cardList: Array<CardModel>;
}

// interface DispatchProps {
//     onFetchTrelloMap: () => void;
// }

class TrelloList extends React.PureComponent<TrelloListProps & StateProps & WithStyles<typeof styles>> {

    public render() {
        const {classes, cardList} = this.props;
        return <div className={classes.listWrapper}>
            <h2> {this.props.name} </h2>
            <div className={classes.cardList}>
                {
                    cardList.map(item => {
                        return <Card key={uuid()} cardItem={item}/>;
                    })
                }
            </div>
        </div>;
    }

}

const mapStateToProps = (state: AppState, ownProps: TrelloListProps): StateProps => {
    return {
        cardList: getCardListById(state, ownProps)
    };
};

// const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
//
// });

const WrappedWithStylesComponent = withStyles(styles)(TrelloList);

const ConnectedComponent =
  connect(mapStateToProps)(WrappedWithStylesComponent);

export { ConnectedComponent as TrelloList };
