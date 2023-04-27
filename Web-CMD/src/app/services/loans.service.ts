import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  urlAPI = 'https://localhost:44382/api';

  constructor(private http: HttpClient) { }

  getAllTransactions() {}

  getAllLoansTransactions(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.urlAPI + '/Transactions/Loans/Accounts/' + `${id}`);
  }
  
  getAllSavingsTransactions() {}
}
