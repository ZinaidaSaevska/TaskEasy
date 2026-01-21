import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AddTaskDialog} from './add-task-dialog/add-task-dialog';
import {Task} from './Task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {

  tasks: Task[] = []

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const createTaskDialog = this.dialog.open(AddTaskDialog)

    createTaskDialog.afterClosed().subscribe(result => {
      if (result) {

        const {title, assignee, estimation} = result

        const newTask = new Task(title, assignee, estimation)

        this.tasks.push(newTask)
      }
    })
  }

}
