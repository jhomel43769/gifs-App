import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'gif-history',
  imports: [RouterModule],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifServices = inject(GifService);
  query = inject(ActivatedRoute).params.subscribe((params) => {
    console.log(params)
  })


}
