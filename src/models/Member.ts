import { LabelNames, Membership, Prefs } from './BoardModel';

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
