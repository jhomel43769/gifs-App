import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifService } from '../../services/gif.service';
import type { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent { 
  gifServices = inject(GifService)
  gifs = signal<Gif[]> ([])


  onSearch(query: string) {
    this.gifServices.searchGifs(query).subscribe((res)=> {
      this.gifs.set(res)
     })
    }

}
