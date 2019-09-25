import {base, Theme} from '../../styles';

export default (theme: Theme) => {
    return {
        ...base(theme),
        root: {
            background: theme.header.background.light,
            minHeight: '100vh'
        }
    };
};
