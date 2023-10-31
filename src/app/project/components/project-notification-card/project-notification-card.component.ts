import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsBoxComponent } from '../notifications-box/notifications-box.component';

@Component({
  selector: 'app-project-notification-card',
  templateUrl: './project-notification-card.component.html',
  styleUrls: ['./project-notification-card.component.scss']
})
export class ProjectNotificationCardComponent implements OnInit {

  notifications!: any
  allNotifications!: any
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
    this.projectService.getAllNotifications(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (response: any) => {
        this.allNotifications = response.data
      }
    })
  }

  notificationsProject() {
    this.dialog.open(NotificationsBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        notifications: this.allNotifications
      }
    })
  }

}
