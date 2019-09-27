import { Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        background: theme.header.background.dark,
        color: theme.header.background.contrastText,
        height: theme.header.height,
        padding: '0 10px'
    },
    content: {
        width: '100%',
        margin: '0 auto',
        maxWidth: 768,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },
    header: {
        display: 'grid',
        gridTemplateColumns: '150px 150px',
        gridGap: '0 10px',
    }
});
