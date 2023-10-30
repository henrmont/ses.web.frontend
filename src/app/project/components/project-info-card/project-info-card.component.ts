import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectBoxComponent } from '../edit-project-box/edit-project-box.component';

@Component({
  selector: 'app-project-info-card',
  templateUrl: './project-info-card.component.html',
  styleUrls: ['./project-info-card.component.scss']
})
export class ProjectInfoCardComponent {

  @Input() project!: Project

  constructor(
    private dialog: MatDialog
  ) {}

  editProject(id: any) {
    this.dialog.open(EditProjectBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        id: id,
      },
    })
  }

}
