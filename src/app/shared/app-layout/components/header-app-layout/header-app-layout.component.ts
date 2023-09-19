import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/shared/device.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header-app-layout',
  templateUrl: './header-app-layout.component.html',
  styleUrls: ['./header-app-layout.component.scss']
})
export class HeaderAppLayoutComponent implements OnInit {

  @Output() menuEvent = new EventEmitter<boolean>();
  expand!: boolean
  @Input() user: any
  @Input() drawer: any
  @Input() device: Device = {
    isHandset: false,
    isTablet: false,
    isWeb: false
  }

  constructor(
    public sharedService: SharedService
  ) {}

  ngOnInit(): void {
    if (window.localStorage.getItem('expand') == 'true') {
      this.expand = true
    } else {
      this.expand = false
    }
  }

  changeMenuSize() {
    this.expand ? window.localStorage.setItem('expand','false') : window.localStorage.setItem('expand','true')
    this.expand = !this.expand
    this.menuEvent.emit(this.expand);
  }

}
