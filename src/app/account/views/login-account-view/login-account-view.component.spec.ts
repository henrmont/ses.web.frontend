import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAccountViewComponent } from './login-account-view.component';

describe('LoginAccountViewComponent', () => {
  let component: LoginAccountViewComponent;
  let fixture: ComponentFixture<LoginAccountViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAccountViewComponent]
    });
    fixture = TestBed.createComponent(LoginAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
