import { NumericLiteral } from "typescript";

export class Person {
    id: number;
    name: string;
    occupation: string;
    description: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || 0;
        this.name = obj && obj.name || "";
        this.occupation = obj && obj.occupation || "";
        this.description = obj && obj.description || "";
    }
}