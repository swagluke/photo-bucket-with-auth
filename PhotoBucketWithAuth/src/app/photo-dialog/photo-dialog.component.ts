import { Photo } from '../models/photo.model';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import * as firebase from 'firebase';

interface DialogData {
  userUid: string;
  photo?: Photo;
}

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss']
})
export class PhotoDialogComponent implements OnInit {
  formPhoto: Photo;
  public userUid: string;
  public photoKey: string;

  constructor(private dialogRef: MdDialogRef<PhotoDialogComponent>) {
    var data: DialogData = this.dialogRef._containerInstance.dialogConfig.data;
    this.userUid = data.userUid;
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
        firebase.database().ref().child('/photo').child(this.photoKey).set(this.formPhoto);
      } else {
        this.formPhoto.user = this.userUid;
        firebase.database().ref().child('/photo').push(this.formPhoto);
      }
      this.dialogRef.close();
    } catch (e) {
      console.log("Error while submitting form", e);
    }
  }
  photoSelected(event: any) {
    const file: File = event.target.files[0];
    const metadata = { "content-type": file.type };
    const storageRef: firebase.storage.Reference = firebase.storage().ref().child("photos").child(file.name);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metadata);
    uploadTask.then((uploadSnapShot: firebase.storage.UploadTaskSnapshot) => {
      const downloadUrl = uploadSnapShot.downloadURL;
      this.formPhoto.url = downloadUrl;
      // firebase.database().ref().child(`/photos/${photoName}`).set(downloadUrl);
    })
  }


  triggerInput(inputEl) {
    inputEl.click();
  }
}
