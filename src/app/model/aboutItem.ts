import { ItemOfAboutItem } from "./ItemOfAboutItem";

export class AboutItem {
    title: string;
    picture: string;
    items: ItemOfAboutItem[]
    id: string;

    constructor(obj?: any) {
        this.title = obj && obj.title || "";
        this.picture = obj && obj.picture || "";
        this.items = obj && obj.items && obj.items.map((elem: any) => new ItemOfAboutItem(elem));
        this.id = obj && obj.id || "";
    }
}