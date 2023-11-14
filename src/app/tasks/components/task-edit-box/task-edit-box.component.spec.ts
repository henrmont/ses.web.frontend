import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditBoxComponent } from './task-edit-box.component';

describe('TaskEditBoxComponent', () => {
  let component: TaskEditBoxComponent;
  let fixture: ComponentFixture<TaskEditBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskEditBoxComponent]
    });
    fixture = TestBed.createComponent(TaskEditBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
