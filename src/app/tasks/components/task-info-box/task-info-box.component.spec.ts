import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInfoBoxComponent } from './task-info-box.component';

describe('TaskInfoBoxComponent', () => {
  let component: TaskInfoBoxComponent;
  let fixture: ComponentFixture<TaskInfoBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskInfoBoxComponent]
    });
    fixture = TestBed.createComponent(TaskInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
