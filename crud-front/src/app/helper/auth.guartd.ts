import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router, private authService: AuthService ) {

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const usaurioAtual = this.authService.usuarioAtual;
        console.log(usaurioAtual);
        if (usaurioAtual) {
            if (route.data.roles && route.data.roles.indexOf(usaurioAtual) === -1) {
                this.router.navigate(['/']);
                return false;
            }

            return true;
        }
    }

}