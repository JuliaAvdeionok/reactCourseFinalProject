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
        // border: '1px solid orange',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        marginRight: 10
        // gridTemplateColumns: '1rf 30px',
        // gridTemplateRowsemplate: '1fr',
        // gridGap: 10
    },
    cardBlock: {
        display: 'grid',
        // display: 'inline-block',
        // border: '3px solid red',
    },
    disabled: {
        boxShadow: 'none !important'
    },
    listWrapper: {
        // display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))',
        // gridGap: '0 10px',
        // margin: '10px 10px',
        // borderRadius: theme.card.boarderRadius,
    },
    cardList: {
        // display: 'block',
        // border: '3px solid black',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))',
        // gridGap: '0 10px',
        // padding: '12px 15px',
        // margin: '10px 10px',
        // backgroundColor: theme.palette.primary.main
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
