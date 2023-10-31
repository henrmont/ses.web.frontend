import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links-project-box',
  templateUrl: './links-project-box.component.html',
  styleUrls: ['./links-project-box.component.scss']
})
export class LinksProjectBoxComponent {

  displayedColumns: string[] = ['image', 'info', 'action'];
  dataSource = this.data.links;

  constructor(
    private dialogRef: MatDialogRef<LinksProjectBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  onDelete(id: any) {
    this.projectService.deleteLink(id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      error: (err) => {
        this.sharedService.showMessage(err.message)
      },
      complete: () => {
        this.dialogRef.close()
        window.location.reload()
      }
    })
  }

}
