import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMenuLayoutComponent } from './web-menu-layout.component';

describe('WebMenuLayoutComponent', () => {
  let component: WebMenuLayoutComponent;
  let fixture: ComponentFixture<WebMenuLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebMenuLayoutComponent]
    });
    fixture = TestBed.createComponent(WebMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
