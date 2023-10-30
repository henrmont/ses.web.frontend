import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollaboratorBoxComponent } from './add-collaborator-box.component';

describe('AddCollaboratorBoxComponent', () => {
  let component: AddCollaboratorBoxComponent;
  let fixture: ComponentFixture<AddCollaboratorBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCollaboratorBoxComponent]
    });
    fixture = TestBed.createComponent(AddCollaboratorBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
