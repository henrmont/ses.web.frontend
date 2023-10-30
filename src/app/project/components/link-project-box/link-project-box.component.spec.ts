import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkProjectBoxComponent } from './link-project-box.component';

describe('LinkProjectBoxComponent', () => {
  let component: LinkProjectBoxComponent;
  let fixture: ComponentFixture<LinkProjectBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkProjectBoxComponent]
    });
    fixture = TestBed.createComponent(LinkProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
