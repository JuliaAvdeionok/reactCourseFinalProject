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
    cardWrapper: {
        backgroundColor: theme.palette.primary.base,
        padding: '12px 15px',
        margin: '10px 10px',
        boxShadow: '1px 1px 2px 2px rgba(209,205,209,0.68)'
    }
});
