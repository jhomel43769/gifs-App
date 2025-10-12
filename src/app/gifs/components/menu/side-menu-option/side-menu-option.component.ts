import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { GifService } from '../../../services/gif.service';
import type { MenuOption } from 'src/app/gifs/interfaces/menu-option.interface';
import GifHistoryComponent from '../../../pages/gif-history/gif-history.component';
@Component({
  imports: [RouterLink, RouterLinkActive, GifHistoryComponent],
  selector: 'gifs-side-menu-option',
  templateUrl: './side-menu-option.component.html',
})
export class SideMenuOptionComponent {
 gifServices = inject(GifService)

menuOption: MenuOption[] = [
  {
    label: "Trending",
    subLabel: "Gifs Populares",
    route: "/dashboard/trending",
    icon: "fa-solid fa-chart-line"
  },
  {
    label: "Buscador",
    subLabel: "Gifs Populares",
    route: "/dashboard/search",
    icon: "fa-solid fa-magnifying-glass"
  }
]

 }
