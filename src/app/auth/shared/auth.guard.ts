import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard {

  constructor( private authService : AuthService, private router : Router ) {
  }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(this.authService.isAuthenticated()) return true;
    // else navigate to login
    this.router.navigate(['/login']);
    return false;
  }
}