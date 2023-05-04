import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { group } from 'console';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
    
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  // async login() {
  //   this.authService.loginUser(this.email, this.password).subscribe(response => {
  //     this.router.navigate(['/dashboard']);
  //     (window as any).angularComponentRef.componentRef.instance.isLoggedIn = true;
  //   }, error => {
  //     console.log(error)
  //   })
  // }
}
