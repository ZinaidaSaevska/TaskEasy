import { Component } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {Task} from '../Task';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../auth/AuthService';
import {Router} from '@angular/router';
import {AddTaskDialog} from '../add-task-dialog/add-task-dialog';

@Component({
  selector: 'app-dashboard',
  imports: [
    CdkDrag,
    CdkDropList,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatIcon,
    MatToolbar
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  tasks: Task[] = []
  tasksInProgress: Task[] = []
  tasksDone: Task[] = []

  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router) {
  }

  openDialog() {
    const createTaskDialog = this.dialog.open(AddTaskDialog)

    createTaskDialog.afterClosed().subscribe(result => {
      if (result) {

        const {title, assignee, estimation} = result

        const newTask: Task = {title, assignee, estimation, status: "ToDo"}

        this.tasks.push(newTask)

        console.log(this.tasks.toString())
      }
    })
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  logout() {
    this.authService.logout()
    this.router.navigate(["login"])
  }
}
