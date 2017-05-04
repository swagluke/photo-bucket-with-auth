import { Author } from './author.model';
import { FirebaseFlatSnapshot } from './firebase-flat-snapshot.model';

export class Photo extends FirebaseFlatSnapshot {
    public user: string;
    public url: string;
    public caption: string;

    constructor(obj?: any) {
        super(obj);
        this.user = obj && obj.user || "";
        this.url = obj && obj.url || "";
        this.caption = obj && obj.caption || "";
    }
}

export class PhotoWithAuthor extends Photo {
    public author: Author;

    constructor(obj?: any) {
        super(obj);
        this.author = obj && obj.author || {};
    }
}