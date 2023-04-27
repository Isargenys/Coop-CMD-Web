import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoansService } from '../services/loans.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../models/Transaction';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  loansAccounts: any;
  loansTransaction: any;

  constructor(private accountService: AccountsService, private loanService: LoansService, 
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans() {
    this.accountService.getAllLoansAccounts().subscribe(data => {
      this.loansAccounts = data;
    });
  }
}
