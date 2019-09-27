import * as React from 'react';
import { SyntheticEvent } from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './AddForm.styles';
import { ToAddModel } from '../../models/ToAddModel';
import { FaPlus } from 'react-icons/fa';

interface Props {
    formName: string;
    onAddItem: (toAdd: any) => void;
    parentId?: string;
}

interface State {
    name: string;
}

class AddForm extends React.PureComponent<Props & WithStyles<typeof styles>, State> {
    public state = {
        name: ''
    };

    private onSubmit = (e) => {
        e.preventDefault();
        const {name} = this.state;
        const {parentId} = this.props;
        this.props.onAddItem(new ToAddModel(name, parentId));
    };

    private onChange = (field: string) => {
        return (e: SyntheticEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value;
            this.setState((state: State) => {
                const newState = Object.create(state);
                newState[field] = value;
                return newState;
            });
        };
    };

    public render() {
        const {classes} = this.props;

        return <form onSubmit={this.onSubmit} className={classes.root}>
            <input
              className={classes.field}
              value={this.state.name}
              onChange={this.onChange('name')}
              type='text'
              placeholder={this.props.formName}
            />
            <button className={classes.button}><FaPlus/></button>
        </form>;
    }
}

const StyledAddForm = withStyles(styles)(AddForm);

export { StyledAddForm as AddForm };
