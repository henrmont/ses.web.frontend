import { Component, Input } from '@angular/core';
import { Device } from 'src/app/shared/device.model';

@Component({
  selector: 'app-mobile-menu-app-layout',
  templateUrl: './mobile-menu-app-layout.component.html',
  styleUrls: ['./mobile-menu-app-layout.component.scss']
})
export class MobileMenuAppLayoutComponent {

  @Input() drawer: any
  @Input() device: Device = {
    isHandsetLandscape: false,
    isHandsetPortrait: false
  }

}
