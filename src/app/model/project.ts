export class Project {
    name: string;
    image: string;
    description: string;

    constructor(obj?: any) {
        this.name = obj && obj.name || "",
            this.image = obj && obj.image || "",
            this.description = obj && obj.description || ""
    }

}