import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectViewComponent } from './views/project-view/project-view.component';
import { MaterialModule } from '../material/material.module';
import { NewProjectBoxComponent } from './components/new-project-box/new-project-box.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { EditProjectBoxComponent } from './components/edit-project-box/edit-project-box.component';
import { ProjectsViewComponent } from './views/projects-view/projects-view.component';
import { CollaboratorsBoxComponent } from './components/collaborators-box/collaborators-box.component';
import { ProjectLinksCardComponent } from './components/project-links-card/project-links-card.component';
import { ProjectInfoCardComponent } from './components/project-info-card/project-info-card.component';
import { ProjectImageCardComponent } from './components/project-image-card/project-image-card.component';
import { SharedModule } from '../shared/shared.module';
import { ImageProjectBoxComponent } from './components/image-project-box/image-project-box.component';
import { ProjectCollaboratorsCardComponent } from './components/project-collaborators-card/project-collaborators-card.component';
import { AddCollaboratorBoxComponent } from './components/add-collaborator-box/add-collaborator-box.component';
import { ProjectNotificationCardComponent } from './components/project-notification-card/project-notification-card.component';
import { AddLinkBoxComponent } from './components/add-link-box/add-link-box.component';
import { LinksProjectBoxComponent } from './components/links-project-box/links-project-box.component';
import { NotificationsBoxComponent } from './components/notifications-box/notifications-box.component';


@NgModule({
  declarations: [
    ProjectViewComponent,
    NewProjectBoxComponent,
    ProjectListComponent,
    EditProjectBoxComponent,
    ProjectsViewComponent,
    CollaboratorsBoxComponent,
    ProjectLinksCardComponent,
    ProjectInfoCardComponent,
    ProjectImageCardComponent,
    ImageProjectBoxComponent,
    ProjectCollaboratorsCardComponent,
    AddCollaboratorBoxComponent,
    ProjectNotificationCardComponent,
    AddLinkBoxComponent,
    LinksProjectBoxComponent,
    NotificationsBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule { }
