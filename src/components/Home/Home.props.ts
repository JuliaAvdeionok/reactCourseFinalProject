import { Member } from '../../models';
import { ToAddModel } from '../../models/ToAddModel';

export interface HomeProps {
}

export interface StateProps {
    isSignedIn: boolean;
    member: Array<Member>;
}

export interface DispatchProps {
    onFetchList: () => void;
    onAddBoard: (newItem: ToAddModel) => void;
}
