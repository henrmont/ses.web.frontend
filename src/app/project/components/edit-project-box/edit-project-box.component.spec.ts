import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectBoxComponent } from './edit-project-box.component';

describe('EditProjectBoxComponent', () => {
  let component: EditProjectBoxComponent;
  let fixture: ComponentFixture<EditProjectBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProjectBoxComponent]
    });
    fixture = TestBed.createComponent(EditProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
