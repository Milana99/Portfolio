export class PLanguage {
    name: string;
    percentage: number;

    constructor(obj?: any) {
        this.name = obj && obj.title || "";
        this.percentage = obj && obj.percentage || 0;
    }
}