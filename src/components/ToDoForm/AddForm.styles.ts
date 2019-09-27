import { Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        maxWidth: 500,
        display: 'grid',
        gridTemplateColumns: '1fr 70px',
        gridTemplateRows: '60px',
        gridGap: '1px'
    },
    field: {
        padding: '8px 12px',
        margin: '8px 0px',
        border: '1px solid #ccc',
        borderRadius: 4,
        outline: 'none',
        fontSize: 12,
    },
    button: {
        padding: '8px 12px',
        margin: '8px 0px',
        borderRadius: '5',
        color: '#000',
        fontSize: 18,
        '&:hover': {
            color: theme.palette.primary.base,
            background: theme.palette.primary.contrastText
        }
    }
});
