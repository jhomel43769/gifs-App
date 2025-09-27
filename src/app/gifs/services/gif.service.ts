import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@env/environment.development';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.papper';

@Injectable({
  providedIn: 'root'
})

export class GifService {
  private http = inject(HttpClient)

  trendingGif = signal<Gif[]>([])
  trendingGifLoading = signal(true)

  constructor () {
    this.loadTrendingGifs()
  }


  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: { 
        api_key: environment.giphyApiKey,
        limit: 20
      }
    }).subscribe((res) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(res.data)
      this.trendingGif.set(gifs)
      this.trendingGifLoading.set(false)
      console.log({gifs})
    })
  }
}
