import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinksCardComponent } from './project-links-card.component';

describe('ProjectLinksCardComponent', () => {
  let component: ProjectLinksCardComponent;
  let fixture: ComponentFixture<ProjectLinksCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectLinksCardComponent]
    });
    fixture = TestBed.createComponent(ProjectLinksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
