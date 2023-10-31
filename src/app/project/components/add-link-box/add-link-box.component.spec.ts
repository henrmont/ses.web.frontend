import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinkBoxComponent } from './add-link-box.component';

describe('AddLinkBoxComponent', () => {
  let component: AddLinkBoxComponent;
  let fixture: ComponentFixture<AddLinkBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLinkBoxComponent]
    });
    fixture = TestBed.createComponent(AddLinkBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
