import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public userpage = true;

    constructor(private http: HttpClient, private cookieService: CookieService) { }

    login(/*email: string, password: string*/) {
        // this.http.post('/login', {email, password}).subscribe((response: any) => {
        //     this.cookieService.set('access_token', response.access_token);
        //     this.userpage = true; 
        // });

        this.userpage = true;
    }

    logout() {
        // this.cookieService.delete('access_token');
        this.userpage = false;
    }

    isUserLogged() {
        return this.userpage;
    }
}