import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNotificationCardComponent } from './project-notification-card.component';

describe('ProjectNotificationCardComponent', () => {
  let component: ProjectNotificationCardComponent;
  let fixture: ComponentFixture<ProjectNotificationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectNotificationCardComponent]
    });
    fixture = TestBed.createComponent(ProjectNotificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
