import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth/AuthService';
import {MatButton} from '@angular/material/button';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel
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

  isFormValid(fieldName: string): boolean {
    return this.loginForm.get(fieldName)?.hasError('required') || false
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
