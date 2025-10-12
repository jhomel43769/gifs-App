import { Component, computed, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";

@Component({
  selector: 'gif-history',
  imports: [RouterModule, GifsListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifServices = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map( params => params['query']) 
    )
  );
  gifsByKey = computed(() => {
    return this.gifServices.getHistoryGifs(this.query())
  })

}
