import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
import { MatDialog } from '@angular/material/dialog';
import { LinkProjectBoxComponent } from '../link-project-box/link-project-box.component';

@Component({
  selector: 'app-project-links-card',
  templateUrl: './project-links-card.component.html',
  styleUrls: ['./project-links-card.component.scss']
})
export class ProjectLinksCardComponent {

  @Input() project!: Project

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  linkProject(id: any) {
    this.dialog.open(LinkProjectBoxComponent, {
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
