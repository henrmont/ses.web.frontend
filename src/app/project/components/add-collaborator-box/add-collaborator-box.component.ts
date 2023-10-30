import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ProjectService } from '../../project.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-collaborator-box',
  templateUrl: './add-collaborator-box.component.html',
  styleUrls: ['./add-collaborator-box.component.scss']
})
export class AddCollaboratorBoxComponent implements OnInit {

  collaboratorCtrl = new FormControl('');
  filteredCollaborators!: Observable<any[]>;

  collaborators!: any[]

  formulario: FormGroup = this.formBuilder.group({
    project_id: [null, Validators.required],
    user_id: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCollaboratorBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.projectService.getAvailableCollaborators(this.data.id).subscribe({
      next: (response: any) => {
        this.collaborators = response.data
        this.filteredCollaborators = this.collaboratorCtrl.valueChanges.pipe(
          startWith(''),
          map(collaborator => (collaborator ? this._filter(collaborator) : this.collaborators.slice())),
        );
      }
    })
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.collaborators.filter(collaborator => collaborator.name.toLowerCase().includes(filterValue));
  }

  onSelect(id: any) {
    this.formulario = this.formBuilder.group({
      project_id: [this.data.id, Validators.required],
      user_id: [id, Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.projectService.addCollaborator(this.formulario.value).subscribe({
        next: (response: any) => {
          this.sharedService.showMessage(response.message)
        },
        error: (err: any) => {
          this.sharedService.showMessage(err.message)
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
