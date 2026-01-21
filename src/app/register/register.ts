import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth/AuthService';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true
})
export class Register {

  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.registerForm= this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    console.log(this.registerForm.value)
    this.register()
  }

  private register() {
    const username = this.registerForm.get("username")?.value || ""
    const password = this.registerForm.get("password")?.value

    this.auth.register(username, password)
  }
}
