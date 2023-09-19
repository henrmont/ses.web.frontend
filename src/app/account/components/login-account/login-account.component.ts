import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Device } from 'src/app/shared/device.model';
import { SharedService } from 'src/app/shared/shared.service';
import { AccountService } from '../../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.scss']
})
export class LoginAccountComponent implements OnInit {

  formulario!: FormGroup
  device: Device = {
    isHandset: false,
    isHandsetLandscape: false,
    isTablet: false,
    isWeb: false
  }

  constructor(
    private formBuilder: FormBuilder,
    public sharedService: SharedService,
    private accountService: AccountService,
    private router: Router
  ) {
    sharedService.setResolution(this.device)
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null],
      password: [null]
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.accountService.loginAccount(this.formulario.value).subscribe({
        next: (response: any) => {
          window.localStorage.setItem('token', response.access_token)
        },
        error: () => {
          this.sharedService.showMessage('Credenciais inválida')
        },
        complete: () => {
          this.router.navigate(['/dashboard'])
          // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          // })
        }
      })
    } else {
      this.sharedService.showMessage('Formulário Inválido')
    }
  }
}
