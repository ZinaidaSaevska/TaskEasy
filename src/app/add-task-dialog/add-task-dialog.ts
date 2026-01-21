import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  imports: [
    ReactiveFormsModule
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
