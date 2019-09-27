import { btnResetDefault, Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        ...btnResetDefault(),
        backgroundColor: theme.palette.primary.main,
        padding: '7px 12px',
        textTransform: 'upperCase',
        borderRadius: theme.card.boarderRadius,
        letterSpacing: 1,
        fontSize: theme.typo.buttonText,
        textAlign: 'center',
        textDecoration: 'none',
        transitionDuration: '0.4s',
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.base,
        }
    },
    content: {},
    disabled: {
        boxShadow: 'none !important'
    }
});
