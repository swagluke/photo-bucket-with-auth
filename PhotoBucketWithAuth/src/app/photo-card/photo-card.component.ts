import { Component, OnInit, Input } from '@angular/core';
import { MdSnackBar, MdDialogConfig, MdDialog } from "@angular/material";
import { AuthService } from './../services/auth.service';
import { PhotoDialogComponent } from './../photo-dialog/photo-dialog.component';
import { Photo } from './../models/photo.model';
import * as firebase from 'firebase';

@Component({
  selector: 'photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  @Input() photo: Photo;
  @Input() firebasePath: string;
  @Input() myCard: boolean;

  constructor(private auth: AuthService, private snackBar: MdSnackBar, private dialog: MdDialog) {
    
  }

  ngOnInit() {
  }

  edit(): void {
    var dialogConfig = new MdDialogConfig();
    dialogConfig.data = { userUid: this.auth.currentUserUid, photo: this.photo };
    this.dialog.open(PhotoDialogComponent, dialogConfig);
  }

  remove(): void {
    firebase.database().ref().child('/photo').child(this.photo.$key).remove();
    let snackBarRef = this.snackBar.open('Photo Removed', 'Dismiss', {duration: 2000});
  }

}
