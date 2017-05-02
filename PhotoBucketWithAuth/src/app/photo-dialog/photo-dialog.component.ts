import { Photo } from './../models/photo.model';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import * as firebase from 'firebase';
interface DialogData {
  firebasePath: string;
  photo?: Photo;
}

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.css']
})
export class PhotoDialogComponent implements OnInit {
  formPhoto: Photo;
  private firebasePath: string;
  private photoKey: string;

  constructor(private dialogRef: MdDialogRef<PhotoDialogComponent>) {
    var data: DialogData = this.dialogRef._containerInstance.dialogConfig.data;
    this.firebasePath = data.firebasePath;
    console.log("Received the data", data);
    this.formPhoto = new Photo();
    if (data.photo) {
      //this.formPassword = data.password;
      Object.assign(this.formPhoto, data.photo);
      this.photoKey = data.photo.$key;
      //   console.log("formPassword", this.formPassword);
      //   console.log("data.password", data.password);
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    try {
      if (this.photoKey) {
        firebase.database().ref()
          .child(this.firebasePath)
          .child(this.photoKey)
          .set(this.formPhoto);
      } else {
        firebase.database().ref().child(this.firebasePath).push(this.formPhoto);
      }
      this.dialogRef.close();
    } catch (e) {
      console.log("Error while submitting form", e);
    }
  }
}
