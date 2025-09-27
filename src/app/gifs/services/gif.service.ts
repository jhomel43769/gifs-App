import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@env/environment.development';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.papper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GifService {
  private http = inject(HttpClient)

  trendingGif = signal<Gif[]>([])
  trendingGifLoading = signal(true)

  searchGif = signal<Gif[]> ([]) 

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
    })
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit:20,
        q: query,
      },
    })
    .pipe(
      map(({ data }) => data),
      map((item) => GifMapper.mapGiphyItemsToGifArray(item))
    )
  }



}
