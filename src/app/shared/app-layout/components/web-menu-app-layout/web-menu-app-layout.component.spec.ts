import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMenuAppLayoutComponent } from './web-menu-app-layout.component';

describe('WebMenuAppLayoutComponent', () => {
  let component: WebMenuAppLayoutComponent;
  let fixture: ComponentFixture<WebMenuAppLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebMenuAppLayoutComponent]
    });
    fixture = TestBed.createComponent(WebMenuAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
