import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-web-menu-layout',
  templateUrl: './web-menu-layout.component.html',
  styleUrls: ['./web-menu-layout.component.scss']
})
export class WebMenuLayoutComponent {

  @Input() expand: boolean = true

}
