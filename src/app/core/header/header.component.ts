import { verifyHostBindings } from '@angular/compiler';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: `<p>header works!</p>`,
  styleUrls: ['./header.component.scss'],
  // styles: [
  // `
  // :host {
  // background-color: green;
  // color: white;
  // padding: 1em;
  // }
  // `,
  // ],
  host: {
    class: 'header',
    id: 'header',
  },
})
export class HeaderComponent {
  @HostBinding('class') hostclass = 'header';
  @HostBinding('id') hostid = 'header';
}
