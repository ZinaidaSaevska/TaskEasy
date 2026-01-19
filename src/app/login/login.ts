import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.loginForm= this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    console.log(this.loginForm.value)
  }
}
