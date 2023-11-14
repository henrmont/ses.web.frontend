import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  CdkDragPlaceholder,
} from '@angular/cdk/drag-drop';
import { TaskInfoBoxComponent } from '../task-info-box/task-info-box.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../../task.service';
import { Task } from '../../models/task.model';
import { SharedService } from 'src/app/shared/shared.service';
import { TaskNewBoxComponent } from '../task-new-box/task-new-box.component';
import { TaskManagerBoxComponent } from '../task-manager-box/task-manager-box.component';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {
  backlog: any = []
  todo: any = []
  progress: any = []
  validating: any = []
  done: any = []


  constructor(
    private dialog: MatDialog,
    private taskService: TaskService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe({
      next: (response: any) => {
        this.backlog = response.data[0]
        this.todo = response.data[1]
        this.progress = response.data[2]
        this.validating = response.data[3]
        this.done = response.data[4]
      }
    })
  }

  drop(event: CdkDragDrop<any[]>, board: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.taskService.changeBoard(event.container.data[event.currentIndex], board).subscribe({
        next: (response: any) => {
          this.sharedService.showMessage(response.message)
        }
      })
    }
  }

  Task(id: any) {
    this.dialog.open(TaskInfoBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '80%',
      height: 'auto',
      data: {
        id: id,
      },
    })
  }

  newTask(board: any) {
    this.dialog.open(TaskNewBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        board: board,
      },
    })
  }

  managerTask(board: any) {
    this.dialog.open(TaskManagerBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        board: board,
      },
    })
  }

}
