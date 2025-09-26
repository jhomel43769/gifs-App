import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'

interface MenuOption {
  label: string,
  subLabel: string,
  route: string,
  icon: string
}

@Component({
  selector: 'gifs-side-menu-option',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-option.component.html',
})
export class SideMenuOptionComponent {
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
