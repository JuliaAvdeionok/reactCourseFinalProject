import { Theme } from '../../styles';

export default (theme: Theme) => ({
    root: {
        background: theme.palette.primary.main
    },
    container: {
        padding: 10,
        maxWidth: 960,
        margin: '0 auto',
        textAlign: 'center',

    },
    headerTеxt: {
    },
    signInLinkWrapper: {
        width: '100%',

        justifyContent: 'center'
    },
    signInLink: {
        color: theme.palette.primary.text,
        border: ''
    }
});
