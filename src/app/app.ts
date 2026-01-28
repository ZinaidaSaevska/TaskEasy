import {Component, OnInit, signal} from '@angular/core';
import {RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AddTaskDialog} from './add-task-dialog/add-task-dialog';
import {Task} from './Task';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CdkDropList, CdkDrag, ReactiveFormsModule, MatButton],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {

  tasks: Task[] = []
  tasksInProgress: Task[] = []
  tasksDone: Task[] = []

  constructor(private dialog: MatDialog) {
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
}
