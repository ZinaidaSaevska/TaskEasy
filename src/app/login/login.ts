import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth/AuthService';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true
})
export class Login {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.loginForm= this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    console.log(this.loginForm.value)
    this.login()
  }

  private login() {
    const username = this.loginForm.get("username")?.value || ""
    const password = this.loginForm.get("password")?.value

    const success = this.auth.login(username, password)

    if (success) {
      //Navigate to dashboard
      console.log("Success")
    } else {
      console.log("Failure")
    }
  }
}
