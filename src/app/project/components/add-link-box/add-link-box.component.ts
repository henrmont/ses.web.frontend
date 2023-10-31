import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-link-box',
  templateUrl: './add-link-box.component.html',
  styleUrls: ['./add-link-box.component.scss']
})
export class AddLinkBoxComponent {

  formulario: FormGroup = this.formBuilder.group({
    project_id: [this.data.id, Validators.required],
    url: [null, Validators.required],
    description: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddLinkBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  onSubmit() {
    console.log(this.formulario)
    if (this.formulario.valid) {
      this.projectService.addLink(this.formulario.value).subscribe({
        next: (response: any) => {
          this.sharedService.showMessage(response.message)
        },
        error: (error) => {
          this.sharedService.showMessage(error.message)
        },
        complete: () => {
          this.dialogRef.close()
          window.location.reload()
          // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          //   this.router.navigate(['projetos'])
          // })
        }
      })
    } else {
      this.sharedService.showMessage('Formulário Inválido')
    }
  }

}
