import { Component, Input } from '@angular/core';
import { Device } from 'src/app/shared/device.model';

@Component({
  selector: 'app-mobile-menu-layout',
  templateUrl: './mobile-menu-layout.component.html',
  styleUrls: ['./mobile-menu-layout.component.scss']
})
export class MobileMenuLayoutComponent {

  @Input() drawer: any
  @Input() device: Device = {
    isHandsetLandscape: false,
    isHandsetPortrait: false
  }

}
