import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    
    constructor(public authService: AuthService, public router: Router, public sessionService: SessionService) {
        this.sessionService.getUserLoggedIn().subscribe(t => { this.session = t })
    }
      
    session!: boolean;
      
    canActivate(): boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
            
            return false;
        }
    
        return true;
    }
}