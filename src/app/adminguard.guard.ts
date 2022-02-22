import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean{
    return true;
  }
  
}
