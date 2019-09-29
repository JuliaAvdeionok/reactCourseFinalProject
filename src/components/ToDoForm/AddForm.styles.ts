import { btnResetDefault, Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        maxWidth: 500,
        display: 'grid',
        gridTemplateColumns: 'minmax(150px, 400px) 42px',
        // gridTemplateRows: '60px',
        gridGap: '1px'
    },
    field: {
        maxWidth: 400,
        padding: '13px 12px',
        margin: '8px 10px',
        border: '1px solid #ccc',
        borderRadius: theme.card.boarderRadius,
        outline: 'none',
        fontSize: 12,
    },
    formButton: {
        ...btnResetDefault(),
        backgroundColor: theme.palette.primary.main,
        padding: '7px 12px',
        margin: '8px 0px',
        textTransform: 'upperCase',
        borderRadius: theme.card.boarderRadius,
        letterSpacing: 1,
        fontSize: theme.typo.buttonText,
        textAlign: 'center',
        textDecoration: 'none',
        transitionDuration: '0.4s',
        border: '1px solid #ccc',
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.base,
            borderColor: theme.palette.primary.contrastText,
        },
    }
});
