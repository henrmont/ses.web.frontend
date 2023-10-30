import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoCardComponent } from './project-info-card.component';

describe('ProjectInfoCardComponent', () => {
  let component: ProjectInfoCardComponent;
  let fixture: ComponentFixture<ProjectInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectInfoCardComponent]
    });
    fixture = TestBed.createComponent(ProjectInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
