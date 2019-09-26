export interface TrelloListModel {
    id: string;
    name: string;
    closed: boolean;
    idBoard: string;
    pos: number;
    subscribed: boolean;
    softLimit?: any;
}
