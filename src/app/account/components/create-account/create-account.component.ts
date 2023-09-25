import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Device } from 'src/app/shared/device.model';
import { SharedService } from 'src/app/shared/shared.service';
import { AccountService } from '../../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  isPasswordChecked: boolean = false
  isEmailExists: boolean = false
  cpassword: string = ''

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
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cpassword: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.accountService.createAccount(this.formulario.value).subscribe({
        next: (response: any) => {
          this.sharedService.showMessage(response.message)
        },
        error: (error) => {
          this.sharedService.showMessage(error.message)
        },
        complete: () => {
          this.router.navigate(['/'])
          // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          // })
        }
      })
    } else {
      this.sharedService.showMessage('Formulário Inválido')
    }
  }

  checkPassword() {
    if (this.formulario.get('password')?.value != this.formulario.get('cpassword')?.value) {
      this.isPasswordChecked = true
    } else {
      this.isPasswordChecked = false
    }
  }

  checkEmail() {
    this.accountService.getAccount(this.formulario.get('email')?.value).subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.isEmailExists = true
        } else {
          this.isEmailExists = false
        }
      }
    })
  }

}
