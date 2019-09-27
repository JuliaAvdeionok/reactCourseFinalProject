export class ToAddModel {
    public id: string;
    public isAchieved: boolean;
    public name: string;

    constructor(
      public newName: string
    ) {
        this.name = newName;
        this.isAchieved = false;
        this.id = Math.floor(Math.random() * 99999).toString();
    }
}
