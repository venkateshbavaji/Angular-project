import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
@Injectable()

export class AdminAuthGuard implements CanActivate{
    constructor(private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let isisAdmin = localStorage.getItem('isAdmin');
        if(isisAdmin ==='True'){
           return true;
        }
        else {
            return this.router.navigate(['/un-authorized']);
        }
    }

}