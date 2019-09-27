import { Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        background: theme.palette.primary.main,
    },
    container: {
        maxWidth: 960,
        margin: '0 auto'
    },
    grid: {
        padding: '10px 10px'
    },
    signInLinkWrapper: {
        width: '100%',
        display: 'flex',
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
    addForm: {

    }
});
