import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project.model';
import { MatDialog } from '@angular/material/dialog';
import { CollaboratorsBoxComponent } from '../collaborators-box/collaborators-box.component';
import { ProjectService } from '../../project.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/account/account.model';
import { AddCollaboratorBoxComponent } from '../add-collaborator-box/add-collaborator-box.component';

@Component({
  selector: 'app-project-collaborators-card',
  templateUrl: './project-collaborators-card.component.html',
  styleUrls: ['./project-collaborators-card.component.scss']
})
export class ProjectCollaboratorsCardComponent implements OnInit {

  collaborators!: any

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projectService.getCollaborators(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (response: any) => {
        this.collaborators = response.data
      }
    })
  }

  collaboratorsProject() {
    this.dialog.open(CollaboratorsBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        collaborators: this.collaborators
      },
    })
  }

  addCollaboratorProject() {
    this.dialog.open(AddCollaboratorBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        id: this.route.snapshot.paramMap.get('id')
      },
    })
  }

}
