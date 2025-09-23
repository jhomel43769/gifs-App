import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router"
import { GifsSideMenuHeaderComponent } from '../../components/gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionComponent } from "../../components/gifs-side-menu-option/gifs-side-menu-option.component";

@Component({
  selector: 'app-dashboard-pages',
  imports: [RouterOutlet, GifsSideMenuHeaderComponent, GifsSideMenuOptionComponent],
  templateUrl: './dashboard-pages.component.html',
})
export default class DashboardPagesComponent { }
