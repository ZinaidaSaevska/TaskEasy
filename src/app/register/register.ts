import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth/AuthService';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatError, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    MatButton
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

  isFormValid(fieldName: string): boolean {
    return this.registerForm.get(fieldName)?.hasError('required') || false
  }
}
