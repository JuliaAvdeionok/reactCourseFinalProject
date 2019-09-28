import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../Card/Card.styles';
import { CardModel } from '../../models/CardModel';

interface Props {
    cardItem: CardModel;
    index: number;
    isDragging: boolean;
}

class Card
  extends React.PureComponent<Props & WithStyles<typeof styles>> {

    public render() {
        const {classes, cardItem, isDragging} = this.props;
        return <div className={isDragging ? classes.cardWrapperColorDregged : classes.cardWrapperColor}>
            <div> id:{cardItem.id} </div>
            <div> Name: {cardItem.name} </div>
            <div> idList: {cardItem.idList} </div>
            <div> pos: {cardItem.pos} </div>
        </div>;
    }

}

const WrappedWithStylesComponent = withStyles(styles)(Card);

export { WrappedWithStylesComponent as Card };
