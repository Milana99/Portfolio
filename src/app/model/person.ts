import { AboutItem } from "./aboutItem";
import { PLanguage } from "./pLanguage";

export class Person {
    id: number;
    name: string;
    occupation: string;
    description: string;
    about: AboutItem[];
    programmingLanguages: PLanguage[];


    constructor(obj?: any) {
        this.id = obj && obj.id || 0;
        this.name = obj && obj.name || "";
        this.occupation = obj && obj.occupation || "";
        this.description = obj && obj.description || "";
        this.about = obj && obj.about && obj.about.map((elem: any) => new AboutItem(elem));
        this.programmingLanguages = obj && obj.programmingLanguages && obj.programmingLanguages.map((elem: any) => new PLanguage(elem));
    }
}