import { Component, OnInit, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    this.router.navigate(['dashboard']);
  }

}