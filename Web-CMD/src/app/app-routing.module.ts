import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoansComponent } from './loans/loans.component';
import { SavingsComponent } from './savings/savings.component';
import { LoanTransactionComponent } from './loans/loan-transaction/loan-transaction.component';
import { HomeComponent } from './home/home.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '', component: HomeComponent, /*canActivate: [AuthGuardService],*/
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ahorros', component: SavingsComponent },
  { path: 'prestamos', component: LoansComponent },
  { path: 'prestamos/transaccion/:id', component: LoanTransactionComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
