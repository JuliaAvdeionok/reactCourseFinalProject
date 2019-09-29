import { btnResetDefault, Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        ...btnResetDefault(),
        backgroundColor: theme.palette.primary.main,
        padding: '12px 15px',
        margin: '10px 10px',
        textTransform: 'none' as any,
    },
    content: {},
    cardWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        marginRight: 10
    },
    cardBlock: {
        display: 'grid',
    },
    disabled: {
        boxShadow: 'none !important'
    },
    listWrapper: {
    },
    cardList: {
    },
    addForm: {},
    boardList: {},
    delButton: {},
    container: {
        borderRadius: theme.card.boarderRadius,
        display: 'block',
        padding: '12px 15px',
        margin: '10px 10px',
        boxShadow: '1px 1px 2px 2px rgba(209,205,209,0.68)',
        backgroundColor: theme.palette.primary.base,
    },
    containerDregged: {
        padding: '12px 15px',
        margin: '10px 10px',
        boxShadow: '1px 1px 2px 2px rgba(64,167,152,0.3)',
        color: theme.palette.primary.base,
        backgroundColor: theme.palette.primary.contrastText
    },
    listDreggedOver: {
        padding: '12px 15px',
        margin: '10px 10px',
        backgroundColor: theme.palette.primary.base
    },
    listContainer: {
        padding: '12px 15px',
        margin: '10px 10px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.card.boarderRadius,
    }
});
