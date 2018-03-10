import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class   superAdminAuthGuard implements CanActivate {

    constructor(private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('s_Token'))
         {
            // logged in so return true
            //alert(sessionStorage.getItem('s_Token'));
            //alert('123')
            //alert(sessionStorage.getItem('s_Token'));
            return true;
        }
        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url }});
        this.router.navigate(['/pages/login']);
        return false;
    }



}
