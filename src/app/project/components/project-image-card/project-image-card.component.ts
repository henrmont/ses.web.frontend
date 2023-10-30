import { Component, Input } from '@angular/core';
import { Project } from '../../project.model';
import { MatDialog } from '@angular/material/dialog';
import { ImageProjectBoxComponent } from '../image-project-box/image-project-box.component';

@Component({
  selector: 'app-project-image-card',
  templateUrl: './project-image-card.component.html',
  styleUrls: ['./project-image-card.component.scss']
})
export class ProjectImageCardComponent {

  @Input() project!: Project
  event!: any

  constructor(
    private dialog: MatDialog
  ) {}


  onFileSelected(event: any) {
    this.event = event;
    this.imageProject(this.project.id)
  }

  imageProject(id: any) {
    this.dialog.open(ImageProjectBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      data: {
        id: id,
        event: this.event
      },
    })
  }



}
