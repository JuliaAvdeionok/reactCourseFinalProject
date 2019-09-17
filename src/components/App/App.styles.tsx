import {base, Theme} from '../../styles';

export default (theme: Theme) => {
    return {
        ...base(theme),
        root: {
            backgroundColor: 'aqua',
            height: 200
        }
    };
};
