import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-web-menu-app-layout',
  templateUrl: './web-menu-app-layout.component.html',
  styleUrls: ['./web-menu-app-layout.component.scss']
})
export class WebMenuAppLayoutComponent {

  @Input() expand: boolean = true

}
