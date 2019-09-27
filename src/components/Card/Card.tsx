import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from '../Card/Card.styles';
import { CardModel } from '../../models/CardModel';

interface Props {
    cardItem: CardModel;
    index: number;
}

class Card
  extends React.PureComponent<Props & WithStyles<typeof styles>> {

    public render() {
        const {classes, cardItem} = this.props;
        return <div className={classes.cardWrapper}>
            <div> {cardItem.name} </div>
        </div>;
    }

}

const WrappedWithStylesComponent = withStyles(styles)(Card);

export { WrappedWithStylesComponent as Card };
