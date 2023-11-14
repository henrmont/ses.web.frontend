import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../task.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Observable, map, startWith } from 'rxjs';
import { ProjectService } from 'src/app/project/project.service';

@Component({
  selector: 'app-task-new-box',
  templateUrl: './task-new-box.component.html',
  styleUrls: ['./task-new-box.component.scss']
})
export class TaskNewBoxComponent implements OnInit {

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
    private dialogRef: MatDialogRef<TaskNewBoxComponent>,
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
      this.taskService.createTask(this.formulario.value, this.data.board).subscribe({
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
