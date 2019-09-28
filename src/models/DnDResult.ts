export interface DnDSource {
    index: number;
    droppableId: string;
}

export interface DnDDestination {
    droppableId: string;
    index: number;
}

export interface DnDResult {
    draggableId: string;
    type: string;
    source: DnDSource;
    reason: string;
    mode: string;
    destination: DnDDestination;
    combine?: any;
}
