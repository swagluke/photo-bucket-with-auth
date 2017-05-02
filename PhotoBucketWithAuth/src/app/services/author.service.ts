import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Photo } from "../models/photo.model";
@Injectable()
export class AuthorService {
  photoStream: FirebaseListObservable<Photo[]>;
  
  constructor(af: AngularFire, authService: AuthService) {
    this.photoStream = af.database.list("/photo");
  }
  
  get photoListStream(): any {
    return this.photoStream;
  }

}
