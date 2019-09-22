import { Member } from '../../models';

export interface HomeProps {
}

export interface StateProps {
    isSignedIn: boolean;
    member: Array<Member>;
}

export interface DispatchProps {
    onFetchList: () => void;
}
