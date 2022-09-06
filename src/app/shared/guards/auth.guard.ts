import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../core/services/auth.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}

    public canActivate(next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let response: boolean = false;

        this.auth.getSession().subscribe((session) => {
            if (session.activeSession && session.user?.admin) {
                response = true;
            } else {
                alert('No tiene permiso para acceder a este recurso!');
            }
        });

        return response;
    }
}