
// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";
// import { AuthService } from "./auth/auth-guard.service";

// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private auth: AuthService, private router: Router) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//         if (this.auth.isLoggedIn()) {
//             this.router.navigate(['/dashboard']);

//             return true;
//         }

//         window.alert('No esta autorizado a ver esta pagina.');
//         return false;
//     }
// }