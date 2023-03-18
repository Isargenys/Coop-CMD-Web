import { Component } from '@angular/core';
import { AuthService } from './auth/auth-guard.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <ng-container *ngIf="authService.isUserLogged(); then userLogged else loginpage"></ng-container>
    <ng-template #userLogged>

    <div class="d-flex" id="wrapper">
        
        <div class="border-end bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom bg-light text-center">Coop-CMD</div>
            <div class="list-group list-group-flush">
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <i class="bi bi-house-door-fill"></i> Inicio
                </a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <i class="bi bi-cash-coin"></i> Prestamos
                </a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <i class="bi bi-piggy-bank-fill"></i> Ahorros y Aportaciones
                </a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                    <i class="bi bi-send-fill"></i> Solicitudes
                </a>
            </div>
        </div>
        
        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li class="nav-item"><a class="nav-link btn btn-primary" href="#!">
                                <i class="bi bi-bell"></i>
                            </a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-person-fill"></i> Nombre Usuario</a>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#!">Action</a>
                                    <a class="dropdown-item" href="#!">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container-fluid">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>


    
</ng-template>

<ng-template #loginpage>
<div class="container-fluid ps-md-0">
<div class="row g-0">
  <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
    <div class="bienvenida-login container text-center">
      <h3 class="mb-4">Bienvenido a Coop CMD</h3>
      <div class="logo">
        <img src="img/download.jpeg" alt="" class="rounded mx-auto d-block">
      </div>
    </div>
  </div>
  <div class="col-md-8 col-lg-6">
    <div class="login d-flex align-items-center py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-lg-8 mx-auto">
            <div class="container text-center">
              <h3 class="login-heading mb-4">Coop CMD</h3>
            </div>

            <!-- Sign In Form -->
            <form>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Correo electrónico</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">contraseña</label>
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                <label class="form-check-label" for="rememberPasswordCheck">
                  Recuerde contraseña
                </label>
              </div>

              <div class="d-grid">
                <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" (click)="login()" type="submit">
                  Iniciar Sesión
                </button>
                <div class="text-center">
                  <a class="small" href="#">Olvidó su contraseña?</a>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</ng-template>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-CMD';

  // isLoggedIn = true;

  constructor(public authService: AuthService) {}

  // isUserLoggedIn() {
  //   this.authService.isUserLoggedIn();
  // }

  login() {
    this.authService.login();
  }


}
