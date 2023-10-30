import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectBoxComponent } from '../../components/new-project-box/new-project-box.component';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss']
})
export class ProjectsViewComponent {

  constructor(
    private dialog: MatDialog
  ) {}

  newProject() {
    this.dialog.open(NewProjectBoxComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto'
    })
  }

}
