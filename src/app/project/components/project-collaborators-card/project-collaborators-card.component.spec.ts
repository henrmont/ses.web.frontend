import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCollaboratorsCardComponent } from './project-collaborators-card.component';

describe('ProjectCollaboratorsCardComponent', () => {
  let component: ProjectCollaboratorsCardComponent;
  let fixture: ComponentFixture<ProjectCollaboratorsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCollaboratorsCardComponent]
    });
    fixture = TestBed.createComponent(ProjectCollaboratorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
