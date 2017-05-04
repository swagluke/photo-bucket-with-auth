import { PhotoDialogComponent } from './../photo-dialog/photo-dialog.component';
import { AuthorService } from './../services/author.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Photo } from './../models/photo.model';
import { FirebaseListObservable } from 'angularfire2';
import { AngularFire } from 'angularfire2';
import { MdDialogConfig, MdDialog } from "@angular/material";
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  photos: FirebaseListObservable<Photo[]>;
  myPhotos: FirebaseListObservable<Photo[]>;
  userUid: string;
  
  constructor(af: AngularFire, auth: AuthService, private dialog: MdDialog) {
    this.photos = af.database.list("/photo");
    this.myPhotos = af.database.list("/photo", {
      query: {
        orderByChild: 'user',
        equalTo: auth.currentUserUid,
      }
    });
    this.userUid = auth.currentUserUid;
  }

  ngOnInit() {
  }

  get numberColumns(): number {
    if (window.innerWidth < 500) {
      return 1;
    } else if (window.innerWidth < 900) {
      return 2;
    } else if (window.innerWidth < 1300) {
      return 3;
    } else {
      return 4;
    }
  }

  showAddPhotoDialog() {
     var dialogConfig = new MdDialogConfig();
     dialogConfig.data = { userUid: this.userUid };
     this.dialog.open(PhotoDialogComponent, dialogConfig);
  }

}
