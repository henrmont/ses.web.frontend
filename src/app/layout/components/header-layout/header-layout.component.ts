import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/shared/device.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {

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
