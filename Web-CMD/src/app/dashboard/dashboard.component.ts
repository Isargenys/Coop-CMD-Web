import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { log } from 'console';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accounts: any;

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
    this.getAccounts();
  }


  getAccounts() {
    this.accountService.getAllAccounts().subscribe(data => {
      this.accounts = data;

      console.log(this.accounts);
    })
  }

}
