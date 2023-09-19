import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAppLayoutComponent } from './footer-app-layout.component';

describe('FooterAppLayoutComponent', () => {
  let component: FooterAppLayoutComponent;
  let fixture: ComponentFixture<FooterAppLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterAppLayoutComponent]
    });
    fixture = TestBed.createComponent(FooterAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
