import { btnResetDefault, Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        background: theme.palette.primary.main,
    },
    container: {
        maxWidth: 960,
        margin: '0 auto',
        padding: '10px 10px',
    },
    signInLinkWrapper: {
        width: '100%',
        justifyContent: 'center'
    },
    signInLink: {
        color: theme.palette.primary.text,
        border: ''
    },
    boardList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))',
        gridGap: '0 10px',
    },
    boardListItem: {
        display: 'grid',
        gridTemplateColumns: '1fr'
    },
    addForm: {},
    heading: {
        height: 20
    },
    linkButton: {
        ...btnResetDefault(),
        backgroundColor: theme.palette.primary.main,
        padding: '14px 22px',
        margin: '10px 10px',
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
        boardList: {
            minHeight: 300
        }
    }
});
