import { PhotoDialogComponent } from './../photo-dialog/photo-dialog.component';
import { Photo } from './../models/photo.model';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Params } from "@angular/router";
import { MdSnackBar, MdDialog, MdDialogConfig } from "@angular/material";
import { AngularFire, FirebaseObjectObservable } from "angularfire2";
import { AuthService } from './../services/auth.service';
import { Location } from '@angular/common';
import * as firebase from 'firebase';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  private routerSubscription: Subscription;
  photo: Photo;
  photoUrl: string;
  uid: string;
  isUser: boolean;

  constructor(
    private route: ActivatedRoute,
    private af: AngularFire,
    private auth: AuthService,
    private dialog: MdDialog,
    private _location: Location) {
    this.routerSubscription = this.route.params.subscribe((params: Params) => {
      this.uid = params['uid'];
      console.log(`The param is ${this.uid}.`);
    });

    this.af.database.object("/photo/" + this.uid).subscribe(item => {
      this.photo = item;
      console.log(this.photo);
      if (this.photo.user === this.auth.currentUserUid) {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    })

  }

  edit() {
    var dialogConfig = new MdDialogConfig();
    dialogConfig.data = { userUid: this.auth.currentUserUid, photo: this.photo };
    this.dialog.open(PhotoDialogComponent, dialogConfig);
  }

  back() {
    this._location.back();
  }

  remove() {
    firebase.database().ref().child('/photo').child(this.photo.$key).remove().then((data) => {
      this._location.back();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
