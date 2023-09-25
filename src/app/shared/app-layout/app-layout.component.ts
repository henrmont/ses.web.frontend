import { AccountService } from './../../account/account.service';
import { Component, OnInit } from '@angular/core';
import { Device } from '../device.model';
import { SharedService } from '../shared.service';
import { Account } from 'src/app/account/account.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  expand: boolean = true
  user!: any

  device: Device = {
    isHandset: false,
    isHandsetLandscape: false,
    isTablet: false,
    isWeb: false
  }

  constructor(
    public sharedService: SharedService,
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {
    sharedService.setResolution(this.device)
  }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (response: any) => {
        this.user = response.resolve.name
      }
    })
    if (window.localStorage.getItem('expand')) {
      if (window.localStorage.getItem('expand') == 'true') {
        this.expand = true
      } else {
        this.expand = false
      }
    } else {
      window.localStorage.setItem('expand','true')
    }
  }

  changeMenuSize(value: boolean) {
    this.expand = value
  }

}
