import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications-box',
  templateUrl: './notifications-box.component.html',
  styleUrls: ['./notifications-box.component.scss']
})
export class NotificationsBoxComponent {

  displayedColumns: string[] = ['image', 'info'];
  dataSource = this.data.notifications;

  constructor(
    private dialogRef: MatDialogRef<NotificationsBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
    private sharedService: SharedService,
    private router: Router
  ) {}

}
