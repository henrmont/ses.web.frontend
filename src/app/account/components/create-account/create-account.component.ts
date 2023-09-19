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
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.accountService.createAccount(this.formulario.value).subscribe({
        next: () => {
          this.sharedService.showMessage('Voto cadastrado com sucesso')
        },
        error: () => {},
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

}
