import { Author } from './author.model';
import { FirebaseFlatSnapshot } from './firebase-flat-snapshot.model';
export class Photo extends FirebaseFlatSnapshot {
    public url: string;
    public authorKey: string;
    public title: string;
    public description: string;

    constructor(obj?: any) {
        super(obj);
        this.url = obj && obj.url || "";
        this.authorKey = obj && obj.authorKey || "";
        this.title = obj && obj.title || "";
        this.description = obj && obj.description || "";
    }
}

export class PhotoWithAuthor extends Photo {
    public author: Author;

    constructor(obj?: any) {
        super(obj);
        this.author = obj && obj.author || {};
    }
}