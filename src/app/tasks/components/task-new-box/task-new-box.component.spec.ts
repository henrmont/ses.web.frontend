import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNewBoxComponent } from './task-new-box.component';

describe('TaskNewBoxComponent', () => {
  let component: TaskNewBoxComponent;
  let fixture: ComponentFixture<TaskNewBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskNewBoxComponent]
    });
    fixture = TestBed.createComponent(TaskNewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
