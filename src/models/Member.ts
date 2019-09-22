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

export interface Membership {
    id: string;
    idMember: string;
    memberType: string;
    unconfirmed: boolean;
    deactivated: boolean;
}

export interface Member {
    name: string;
    desc: string;
    descData?: any;
    closed: boolean;
    idOrganization: string;
    limits?: any;
    pinned?: any;
    shortLink: string;
    powerUps: Array<any>;
    dateLastActivity: Date;
    idTags: Array<any>;
    datePluginDisable?: any;
    creationMethod?: any;
    ixUpdate?: any;
    id: string;
    starred: boolean;
    url: string;
    prefs: Prefs;
    subscribed: boolean;
    labelNames: LabelNames;
    dateLastView: Date;
    shortUrl: string;
    templateGallery?: any;
    memberships: Array<Membership>;
}
