import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/Transaction';
import { AccountsService } from 'src/app/services/accounts.service';
import { LoansService } from 'src/app/services/loans.service';

@Component({
  selector: 'app-loan-transaction',
  templateUrl: './loan-transaction.component.html',
  styleUrls: ['./loan-transaction.component.css']
})
export class LoanTransactionComponent implements OnInit {

  
  // transactions: Transaction = {
  //   TransactionID: 0,
  //   TransactionNumber: '',
  //   AmountTransaction: 0, 
  //   TransactionDate: new Date(),
  //   AccountID: 0,
  //   TransactionTypeID: 0 
  // };
  transactions: Transaction = new Transaction;
  
  constructor(private accountService: AccountsService, private loanService: LoansService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getLoanTransaction(this.route.snapshot.params['AccountID']);
  }

  getLoanTransaction(id: any) {
    this.loanService.getAllLoansTransactions(id).subscribe(data => {
      this.transactions = data;

      console.log(this.transactions);
    });
  } 
}
