import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from '../side-menu-header/gifs-side-menu-header.component';
import { SideMenuOptionComponent } from '../side-menu-option/side-menu-option.component';

@Component({
  selector: 'app-side-menu',
  imports: [GifsSideMenuHeaderComponent, SideMenuOptionComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent { }
