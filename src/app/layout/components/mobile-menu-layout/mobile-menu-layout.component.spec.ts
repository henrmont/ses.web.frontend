import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuLayoutComponent } from './mobile-menu-layout.component';

describe('MobileMenuLayoutComponent', () => {
  let component: MobileMenuLayoutComponent;
  let fixture: ComponentFixture<MobileMenuLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileMenuLayoutComponent]
    });
    fixture = TestBed.createComponent(MobileMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
