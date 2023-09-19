import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuAppLayoutComponent } from './mobile-menu-app-layout.component';

describe('MobileMenuAppLayoutComponent', () => {
  let component: MobileMenuAppLayoutComponent;
  let fixture: ComponentFixture<MobileMenuAppLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileMenuAppLayoutComponent]
    });
    fixture = TestBed.createComponent(MobileMenuAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
