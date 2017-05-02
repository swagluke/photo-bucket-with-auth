import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './+main/main.component';
import { SigninComponent } from './+signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: '' },
  { path: 'photo-detail', component: PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
