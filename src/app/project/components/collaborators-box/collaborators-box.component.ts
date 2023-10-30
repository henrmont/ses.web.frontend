import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaborators-box',
  templateUrl: './collaborators-box.component.html',
  styleUrls: ['./collaborators-box.component.scss']
})
export class CollaboratorsBoxComponent {

  displayedColumns: string[] = ['image', 'info', 'action'];
  dataSource = this.data.collaborators;

  constructor(
    private dialogRef: MatDialogRef<CollaboratorsBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  onDelete(id: any) {
    this.projectService.deleteCollaborator(id).subscribe({
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
