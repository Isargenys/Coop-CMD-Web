import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAPI = 'https://localhost:44382';

  public userpage = true;

  constructor(private http: HttpClient, private router: Router, private sessionService: SessionService) { }

  loginUser(formData: any) {
    try {
      // let response = this.http.post<{ token: string, user: user, refreshToken: string }>(this.urlAPI + '/token', formData);

      // this.setToken(response.token)
      // this.setUser(response.user)
            
      this.http.post(this.urlAPI + '/token', formData);
      this.router.navigate(['/dashboard']); 
      this.sessionService.setUserLoggedIn(true);
            
      return true;   
    }
    catch(error) {
      alert('¡Verifique usuario y/o contraseña!');
      
      return false;
    }

  }

  logout(indirect?: boolean) {
    if (!indirect) {
      this.sessionService.setUserLoggedIn(false);
      this.router.navigate(['login']);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } else {
      this.sessionService.setUserLoggedIn(false);
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // setUser(user: user) {
  //     let userJson = JSON.stringify(user)
  //     localStorage.setItem('user', userJson)
  // }
    
  checkSession() {
    if (this.getToken() && localStorage.getItem('user')) {
      this.router.navigate(['/dashboard']);
    }
  }
  
  isAuthenticated(): boolean { return this.getToken() ? true : false; }
}
