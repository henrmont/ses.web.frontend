import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProjectBoxComponent } from './image-project-box.component';

describe('ImageProjectBoxComponent', () => {
  let component: ImageProjectBoxComponent;
  let fixture: ComponentFixture<ImageProjectBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProjectBoxComponent]
    });
    fixture = TestBed.createComponent(ImageProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
