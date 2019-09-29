import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { DispatchProps, StateProps } from './Home.props';
import { Page } from '../Page';
import { PATHS } from '../App/App.paths';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { AddForm } from '../ToDoForm';

class Home extends React.PureComponent<StateProps & DispatchProps & RouteComponentProps & WithStyles<typeof styles>> {
    public state = {
        token: undefined,
    };

    public componentDidMount(): void {
        this.props.onFetchList();
    }

    public render() {
        const {classes} = this.props;
        return <Page title={'CLONE TRELLO|HOME'}>
            <div className={classes.container}>
                <div className={classes.addForm}>
                    <AddForm formName={'Add new board'} onAddItem={this.props.onAddBoard}/>
                </div>
                <div className={classes.heading}>
                    <h3>Your board list:</h3>
                </div>
                <div className={classes.boardList}>
                    {this.renderBoardList()}
                </div>
            </div>
        </Page>;
    }

    private renderBoardList = () => {
        const {classes} = this.props;
        return this.props.member.map(board => {
              const link = `${PATHS.BOARD}/${board.id}`;
              return <div key={uuid()} className={classes.boardListItem}>
                  <Link className={classes.linkButton} key={uuid()} to={link}>{board.name}</Link>
              </div>;

          }
        );
    };

}

const WrappedWithStylesComponent = withStyles(styles)(Home);
export { WrappedWithStylesComponent as HomeComponent };
