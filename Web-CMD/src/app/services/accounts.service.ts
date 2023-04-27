import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  urlAPI = 'https://localhost:44382/api';

  constructor(private http: HttpClient) { }

  getAllAccounts() {
    return this.http.get(this.urlAPI + '/Accounts');
  }

  getAllSavingsAccounts() {
    return this.http.get(this.urlAPI + '/Savings');
  }
  
  getAllLoansAccounts() {
    return this.http.get(this.urlAPI + '/Loans');
  }
}
