import React, { ButtonHTMLAttributes } from 'react';
import withStyles, { WithStyles } from 'react-jss';

import styles from './CardWrapper.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const CardWrapper: React.FC<Props & WithStyles<typeof styles>> = ({children, className, classes, ...props}) => {
    return <button className={classes.root} {...props}>{children}</button>;
};

const CardWithStyles = withStyles(styles)(CardWrapper);

export { CardWithStyles as CardWrapper };
