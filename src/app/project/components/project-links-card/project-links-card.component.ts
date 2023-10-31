import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
import { MatDialog } from '@angular/material/dialog';
import { AddLinkBoxComponent } from '../add-link-box/add-link-box.component';
import { LinksProjectBoxComponent } from '../links-project-box/links-project-box.component';

@Component({
  selector: 'app-project-links-card',
  templateUrl: './project-links-card.component.html',
  styleUrls: ['./project-links-card.component.scss']
})
export class ProjectLinksCardComponent implements OnInit {

  links!: any

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.projectService.getLinks(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (response: any) => {
        this.links = response.data
      }
    })
  }

  addLinkProject() {
    this.dialog.open(AddLinkBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        id: this.route.snapshot.paramMap.get('id'),
      },
    })
  }

  linksProject() {
    this.dialog.open(LinksProjectBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        links: this.links,
      },
    })
  }

}
