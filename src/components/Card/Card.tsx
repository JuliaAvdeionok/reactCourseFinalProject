import React, { ButtonHTMLAttributes } from 'react';
import withStyles, { WithStyles } from 'react-jss';

import styles from './Card.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Card: React.FC<Props & WithStyles<typeof styles>> = ({children, className, classes, ...props}) => {
    return <button className={classes.root} {...props}>{children}</button>;
};

const WrappedCard = withStyles(styles)(Card);

export { WrappedCard as Card };
