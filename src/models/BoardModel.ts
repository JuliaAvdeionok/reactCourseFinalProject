export interface PerBoard {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface PerCard {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface Attachments {
    perBoard: PerBoard;
    perCard: PerCard;
}

export interface TotalMembersPerBoard {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface Boards {
    totalMembersPerBoard: TotalMembersPerBoard;
}

export interface OpenPerBoard {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface OpenPerList {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface TotalPerBoard {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface TotalPerList {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface Cards {
    openPerBoard: OpenPerBoard;
    openPerList: OpenPerList;
    totalPerBoard: TotalPerBoard;
    totalPerList: TotalPerList;
}

export interface PerBoard2 {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface PerCard2 {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface Checklists {
    perBoard: PerBoard2;
    perCard: PerCard2;
}

export interface PerChecklist {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface CheckItems {
    perChecklist: PerChecklist;
}

export interface PerBoard3 {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface CustomFields {
    perBoard: PerBoard3;
}

export interface PerField {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface CustomFieldOptions {
    perField: PerField;
}

export interface PerBoard4 {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface Labels {
    perBoard: PerBoard4;
}

export interface OpenPerBoard2 {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface TotalPerBoard2 {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface Lists {
    openPerBoard: OpenPerBoard2;
    totalPerBoard: TotalPerBoard2;
}

export interface PerCard3 {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface Stickers {
    perCard: PerCard3;
}

export interface PerAction {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface UniquePerAction {
    status: string;
    disableAt: number;
    warnAt: number;
}

export interface Reactions {
    perAction: PerAction;
    uniquePerAction: UniquePerAction;
}

export interface Limits {
    attachments: Attachments;
    boards: Boards;
    cards: Cards;
    checklists: Checklists;
    checkItems: CheckItems;
    customFields: CustomFields;
    customFieldOptions: CustomFieldOptions;
    labels: Labels;
    lists: Lists;
    stickers: Stickers;
    reactions: Reactions;
}

export interface Prefs {
    permissionLevel: string;
    hideVotes: boolean;
    voting: string;
    comments: string;
    invitations: string;
    selfJoin: boolean;
    cardCovers: boolean;
    isTemplate: boolean;
    cardAging: string;
    calendarFeedEnabled: boolean;
    background: string;
    backgroundImage?: any;
    backgroundImageScaled?: any;
    backgroundTile: boolean;
    backgroundBrightness: string;
    backgroundColor: string;
    backgroundBottomColor: string;
    backgroundTopColor: string;
    canBePublic: boolean;
    canBeEnterprise: boolean;
    canBeOrg: boolean;
    canBePrivate: boolean;
    canInvite: boolean;
}

export interface Membership {
    id: string;
    idMember: string;
    memberType: string;
    unconfirmed: boolean;
    deactivated: boolean;
}

export interface LabelNames {
    green: string;
    yellow: string;
    orange: string;
    red: string;
    purple: string;
    blue: string;
    sky: string;
    lime: string;
    pink: string;
    black: string;
}

export interface BoardModel {
    id: string;
    name: string;
    desc: string;
    descData?: any;
    closed: boolean;
    idOrganization: string;
    limits: Limits;
    pinned: boolean;
    starred: boolean;
    url: string;
    prefs: Prefs;
    memberships: Array<Membership>;
    shortLink: string;
    subscribed: boolean;
    labelNames: LabelNames;
    powerUps: Array<any>;
    dateLastActivity: Date;
    dateLastView: Date;
    shortUrl: string;
    idTags: Array<any>;
    datePluginDisable?: any;
    creationMethod?: any;
    ixUpdate?: any;
    templateGallery?: any;
}
