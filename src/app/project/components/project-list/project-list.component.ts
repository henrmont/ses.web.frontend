import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../project.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectBoxComponent } from '../edit-project-box/edit-project-box.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects!: any

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (response: any) => {
        this.projects = response.data
      }
    })
  }

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
