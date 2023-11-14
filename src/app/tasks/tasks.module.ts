import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksViewComponent } from './views/tasks-view/tasks-view.component';
import { TasksBoardComponent } from './components/tasks-board/tasks-board.component';
import { MaterialModule } from '../material/material.module';
import { TaskInfoBoxComponent } from './components/task-info-box/task-info-box.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskNewBoxComponent } from './components/task-new-box/task-new-box.component';
import { TaskManagerBoxComponent } from './components/task-manager-box/task-manager-box.component';
import { TaskEditBoxComponent } from './components/task-edit-box/task-edit-box.component';


@NgModule({
  declarations: [
    TasksViewComponent,
    TasksBoardComponent,
    TaskInfoBoxComponent,
    TaskCardComponent,
    TaskNewBoxComponent,
    TaskManagerBoxComponent,
    TaskEditBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
