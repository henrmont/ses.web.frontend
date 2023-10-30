import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImageCardComponent } from './project-image-card.component';

describe('ProjectImageCardComponent', () => {
  let component: ProjectImageCardComponent;
  let fixture: ComponentFixture<ProjectImageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectImageCardComponent]
    });
    fixture = TestBed.createComponent(ProjectImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
