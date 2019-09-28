import {btnResetDefault, Theme} from '../../styles';

export default (theme: Theme) => ({
    root: {
        ...btnResetDefault(),
        backgroundColor: theme.palette.primary.main,
        padding: '12px 15px',
        margin: '10px 10px',
        textTransform: 'none' as any,
    },
    content: {},
    disabled: {
        boxShadow: 'none !important'
    },
    listWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))',
        gridGap: '0 10px',
        // padding: '12px 15px',
        margin: '10px 10px',
        borderRadius: theme.card.boarderRadius,
        // backgroundColor: theme.palette.primary.main
    },
    cardList: {
    },
    boardList: {

    },
    delButton: {

    },
    container: {
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
        backgroundColor: theme.palette.primary.main
    }
});
