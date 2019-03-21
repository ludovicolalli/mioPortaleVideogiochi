import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate {
    path: import("@angular/router").ActivatedRouteSnapshot[];
    route: import("@angular/router").ActivatedRouteSnapshot;

    canActivate(){
        if(!(sessionStorage.getItem('user') && sessionStorage.getItem('pwd'))){
            alert("devi fare il Login");
            return false;
        } else {
            return true;
        }
    };
}
