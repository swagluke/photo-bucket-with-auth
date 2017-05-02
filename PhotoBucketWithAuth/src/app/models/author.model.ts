import { FirebaseFlatSnapshot } from './firebase-flat-snapshot.model';
export class Author extends FirebaseFlatSnapshot {
    public uid: string;

    constructor(obj?: any) {
        super(obj);
        this.uid = obj && obj.uid || "";
    }
}