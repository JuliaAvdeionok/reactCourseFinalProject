export interface Trello {
    board: number;
    card: number;
}

export interface AttachmentsByType {
    trello: Trello;
}

export interface Badges {
    attachmentsByType: AttachmentsByType;
    location: boolean;
    votes: number;
    viewingMemberVoted: boolean;
    subscribed: boolean;
    due?: any;
    description: boolean;
    attachments: number;
    comments: number;
    checkItemsChecked: number;
    checkItems: number;
    fogbugz: string;
    dueComplete: boolean;
}

export interface Cover {
    idAttachment?: any;
    color?: any;
    idUploadedBackground?: any;
    size: string;
    brightness: string;
}

export interface CardModel {
    id: string;
    checkItemStates?: any;
    closed: boolean;
    dateLastActivity: Date;
    desc: string;
    descData?: any;
    dueReminder?: any;
    idBoard: string;
    idList: string;
    idMembersVoted: Array<any>;
    idShort: number;
    idAttachmentCover?: any;
    idLabels: Array<any>;
    manualCoverAttachment: boolean;
    name: string;
    pos: number;
    shortLink: string;
    badges: Badges;
    dueComplete: boolean;
    due?: any;
    idChecklists: Array<any>;
    idMembers: Array<any>;
    labels: Array<any>;
    shortUrl: string;
    subscribed: boolean;
    url: string;
    cover: Cover;
}

export class UpdateCardModel {
    public id: string;
    public idBoard?: string;
    public idList: string;

    constructor(
      id: string,
      idList: string
    ) {
        this.id = id;
        this.idList = idList;
    }
}
