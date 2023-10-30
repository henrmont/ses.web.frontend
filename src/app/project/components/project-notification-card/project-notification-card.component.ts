import { NotificationBoxComponent } from './../notification-box/notification-box.component';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project-notification-card',
  templateUrl: './project-notification-card.component.html',
  styleUrls: ['./project-notification-card.component.scss']
})
export class ProjectNotificationCardComponent implements OnInit {

  notifications!: any
  currentDate = new Date();

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projectService.getNotifications(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (response: any) => {
        this.notifications = response.data
      }
    })
  }

  notificationsProject() {
    this.dialog.open(NotificationBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto'
    })
  }

}
