import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isSignedInStream.map<boolean, boolean>((isSignedIn: boolean) => {
      console.log("Checking auth guard. isSignIn: ", isSignedIn);
      if (!isSignedIn) {
        this.router.navigate(['/signin']);
      }
      return isSignedIn;
    });
  }


  constructor(private authService: AuthService,
    private router: Router) { }

}