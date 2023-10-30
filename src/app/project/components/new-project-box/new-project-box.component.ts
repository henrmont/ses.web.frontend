import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ProjectService } from '../../project.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-project-box',
  templateUrl: './new-project-box.component.html',
  styleUrls: ['./new-project-box.component.scss']
})
export class NewProjectBoxComponent {

  formulario: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewProjectBoxComponent>,
    private projectService: ProjectService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.formulario.valid) {
      this.projectService.createProject(this.formulario.value).subscribe({
        next: (response: any) => {
          this.sharedService.showMessage(response.message)
        },
        error: (error) => {
          this.sharedService.showMessage(error.message)
        },
        complete: () => {
          this.dialogRef.close()
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['projetos'])
          })
        }
      })
    } else {
      this.sharedService.showMessage('Formulário Inválido')
    }
  }

}
