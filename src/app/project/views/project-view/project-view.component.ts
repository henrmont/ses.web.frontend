import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  project: Project = {
    name: null,
    description: null,
    url_homologation: null,
    url_production: null,
    url_git: null,
    logo: null,
  }
  currentDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.projectService.getProject(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (response: any) => {
        this.project = response.data
      }
    })
  }

}
