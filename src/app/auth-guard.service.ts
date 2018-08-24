import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router:Router,
     
  ) { }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  canActivate():boolean{
    if (this.loggedIn()) {
      return true
    } else{
      this.router.navigate(['/login'])
      return false
    }
  }

}
