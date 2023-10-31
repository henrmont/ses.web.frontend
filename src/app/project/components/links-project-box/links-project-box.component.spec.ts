import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksProjectBoxComponent } from './links-project-box.component';

describe('LinksProjectBoxComponent', () => {
  let component: LinksProjectBoxComponent;
  let fixture: ComponentFixture<LinksProjectBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksProjectBoxComponent]
    });
    fixture = TestBed.createComponent(LinksProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
