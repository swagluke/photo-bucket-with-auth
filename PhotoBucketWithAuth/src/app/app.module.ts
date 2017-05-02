import { AuthorService } from './services/author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './+main/main.component';
import { SigninComponent } from './+signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoDialogComponent } from './photo-dialog/photo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SigninComponent,
    PhotoDetailComponent,
    PhotoDialogComponent,
  ],
  entryComponents: [PhotoDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService, AuthGuardService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
