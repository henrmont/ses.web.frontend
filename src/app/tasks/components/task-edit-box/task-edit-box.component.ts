import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { TaskService } from '../../task.service';
import { ProjectService } from 'src/app/project/project.service';
import { SharedService } from 'src/app/shared/shared.service';
import * as moment from 'moment';

@Component({
  selector: 'app-task-edit-box',
  templateUrl: './task-edit-box.component.html',
  styleUrls: ['./task-edit-box.component.scss']
})
export class TaskEditBoxComponent implements OnInit {

  projectCtrl = new FormControl('');
  filteredProjects!: Observable<any[]>;

  projects!: any[]

  formulario: FormGroup = this.formBuilder.group({
    project_id: [null, Validators.required],
    name: [null, Validators.required],
    start_at: [null, Validators.required],
    end_at: [null],
    board: [this.data.board, Validators.required],
    disabled: [false, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<TaskEditBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    private projectService: ProjectService,
    private sharedService: SharedService,
  ) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (response: any) => {
        this.projects = response.data
        this.filteredProjects = this.projectCtrl.valueChanges.pipe(
          startWith(''),
          map(project => (project ? this._filter(project) : this.projects.slice())),
        );
      }
    })
    this.taskService.getTask(this.data.id).subscribe({
      next: (response: any) => {
        this.formulario = this.formBuilder.group({
          id: [response.data.id, Validators.required],
          project_id: [response.data.project_id, Validators.required],
          name: [response.data.name, Validators.required],
          start_at: [response.data.start_at, Validators.required],
          end_at: [response.data.end_at],
          board: [this.data.board, Validators.required],
          disabled: [response.data.disabled, Validators.required]
        });
      }
    })
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.projects.filter(project => project.name.toLowerCase().includes(filterValue));
  }

  onSelect(id: any) {
    this.formulario.patchValue({
      project_id: id
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.taskService.editTask(this.formulario.value).subscribe({
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
