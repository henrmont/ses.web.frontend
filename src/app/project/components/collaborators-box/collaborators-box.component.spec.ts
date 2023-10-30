import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsBoxComponent } from './collaborators-box.component';

describe('CollaboratorsBoxComponent', () => {
  let component: CollaboratorsBoxComponent;
  let fixture: ComponentFixture<CollaboratorsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaboratorsBoxComponent]
    });
    fixture = TestBed.createComponent(CollaboratorsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
