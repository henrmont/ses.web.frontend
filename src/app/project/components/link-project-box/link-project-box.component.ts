import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-project-box',
  templateUrl: './link-project-box.component.html',
  styleUrls: ['./link-project-box.component.scss']
})
export class LinkProjectBoxComponent implements OnInit {

  formulario: FormGroup = this.formBuilder.group({
    id: [null, Validators.required],
    url_homologation: ['', Validators.required],
    url_production: ['', Validators.required],
    url_git: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LinkProjectBoxComponent>,
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
          url_homologation: [response.data.url_homologation, Validators.required],
          url_production: [response.data.url_production, Validators.required],
          url_git: [response.data.url_git, Validators.required],
        });
      }
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.projectService.updateProjectLinks(this.formulario.value).subscribe({
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
