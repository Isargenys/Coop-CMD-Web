import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTransactionComponent } from './loan-transaction.component';

describe('LoanTransactionComponent', () => {
  let component: LoanTransactionComponent;
  let fixture: ComponentFixture<LoanTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
