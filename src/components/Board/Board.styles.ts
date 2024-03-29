import { Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        background: theme.palette.primary.main,
    },
    grid: {
        maxWidth: 960,
        margin: '0 auto',
        padding: '10px 10px'
    },
    boardHeader: {
        display: 'grid',
        gridTemplateColumns: '1fr 200px'
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
    },
    addForm: {}
});
