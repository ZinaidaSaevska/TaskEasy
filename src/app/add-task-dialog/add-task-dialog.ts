import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-task-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInput,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.css',
  standalone: true
})
export class AddTaskDialog {

  protected createTaskForm: FormGroup

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddTaskDialog>) {
    this.createTaskForm = formBuilder.group({
      title: ['', Validators.required],
      assignee: ['', Validators.required],
      estimation: ['', Validators.required]
    })
  }

  submit() {
    if (this.createTaskForm.valid) {
      this.dialogRef.close(
        {
          title: this.createTaskForm.value.title,
          assignee: this.createTaskForm.value.assignee,
          estimation: this.createTaskForm.value.estimation,
        }
      )
    }
  }

  close() {
    this.dialogRef.close()
  }
}
