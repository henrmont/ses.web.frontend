import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account/account.model';
import { ActivatedRoute } from '@angular/router';
import { Device } from '../shared/device.model';
import { SharedService } from '../shared/shared.service';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

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
