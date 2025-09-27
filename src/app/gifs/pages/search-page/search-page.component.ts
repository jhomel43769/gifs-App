import { Component, inject } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list.component';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent { 
  gifServices = inject(GifService)


  onSearch(query: string) {
    this.gifServices.searchGifs(query)
    }

}
