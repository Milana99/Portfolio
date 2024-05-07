export class ItemOfAboutItem {
    name: string;
    description: string[];
    id: string;

    constructor(obj?: any) {
        this.name = obj && obj.name || "";
        this.description = obj && obj.description || "";
        this.id = obj && obj.id || ""
    }
}