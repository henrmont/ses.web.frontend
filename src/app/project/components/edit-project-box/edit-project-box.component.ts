import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';
import { SharedService } from 'src/app/shared/shared.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-edit-project-box',
  templateUrl: './edit-project-box.component.html',
  styleUrls: ['./edit-project-box.component.scss']
})
export class EditProjectBoxComponent implements OnInit {

  formulario: FormGroup = this.formBuilder.group({
    id: [null, Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditProjectBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectService.getProject(this.data.id).subscribe({
      next: (response: any) => {
        this.formulario = this.formBuilder.group({
          id: [this.data.id, Validators.required],
          name: [response.data.name, Validators.required],
          description: [response.data.description, Validators.required],
        });
      }
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.projectService.updateProject(this.formulario.value).subscribe({
        next: (response: any) => {
          this.sharedService.showMessage(response.message)
        },
        error: (error) => {
          this.sharedService.showMessage(error.message)
        },
        complete: () => {
          this.dialogRef.close()
          window.location.reload()
        }
      })

    } else {
      this.sharedService.showMessage('Formulário Inválido')
    }
  }

}
