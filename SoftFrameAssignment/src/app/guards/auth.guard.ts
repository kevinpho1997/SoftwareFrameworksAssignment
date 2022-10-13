import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router){}

  // guard against unwanted route access if user is not logged in
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authservice.isLoggedIn) {
        // this.authservice.login();
        alert("You do not have access permissions or have not logged in.");
        this.router.navigateByUrl('/login');
        return false
        // return this.router.createUrlTree(
        //   ['/login', { message: 'You do not have access permissions or have not logged in' }]
        // );
      } else {
        // this.authservice.isLoggedIn = true;
        return true;
      }
  }
  
}
