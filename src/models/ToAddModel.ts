export class ToAddModel {
    public id: string;
    public isAchieved: boolean;
    public name: string;
    public parentId?: string;

    constructor(
      name: string,
      parentId: string
    ) {
        this.name = name;
        this.isAchieved = false;
        this.id = Math.floor(Math.random() * 99999).toString();
        this.parentId = parentId;
    }
}
