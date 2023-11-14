import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { SharedService } from 'src/app/shared/shared.service';
import { TaskEditBoxComponent } from '../task-edit-box/task-edit-box.component';

@Component({
  selector: 'app-task-manager-box',
  templateUrl: './task-manager-box.component.html',
  styleUrls: ['./task-manager-box.component.scss']
})
export class TaskManagerBoxComponent implements OnInit {

  displayedColumns: string[] = ['image', 'info', 'action'];
  dataSource = [];

  constructor(
    private dialogRef: MatDialogRef<TaskManagerBoxComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    private sharedService: SharedService,
  ) {}

  ngOnInit(): void {
    this.taskService.getBoardTasks(this.data.board).subscribe({
      next: (response: any) => {
        console.log(response.data)
        this.dataSource = response.data
      }
    })
  }

  onDelete(id: any) {
    this.taskService.deleteTask(id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      error: (err) => {
        this.sharedService.showMessage(err.message)
      },
      complete: () => {
        this.dialogRef.close()
        window.location.reload()
      }
    })
  }

  editTask(id: any, board: any) {
    this.dialog.open(TaskEditBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        id: id,
        board: board
      },
    })
  }

}
