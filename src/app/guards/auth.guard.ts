import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(): boolean | UrlTree {
    
      if(window.sessionStorage.getItem("token") !== "string"){
        return this.router.parseUrl("/");
      } else {
        return true;
      }
  }
  
}