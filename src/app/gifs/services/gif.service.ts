import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';

import { environment } from '@env/environment.development';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.papper';
import { map, tap } from 'rxjs';

const GIF_KEY = "gif"


const loadFromLocalStorage = () => {
  const gifFromLocalStorage = localStorage.getItem(GIF_KEY) ?? "[]"
  const gifs = JSON.parse(gifFromLocalStorage)
  console.log(gifs)
  return gifs
}

@Injectable({
  providedIn: 'root'
})

export class GifService {
  private http = inject(HttpClient)

  trendingGif = signal<Gif[]>([])
  trendingGifLoading = signal(true)

  searhchHistory = signal<Record<string,Gif[]>>(loadFromLocalStorage())
  searchHistoryKey = computed (() => Object.keys(this.searhchHistory()))

  saveHistoryToLocalStorage = effect(() => {
    localStorage.setItem(GIF_KEY, JSON.stringify(this.searhchHistory()))
  }) 



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
      map((item) => GifMapper.mapGiphyItemsToGifArray(item)),
      tap(items => {
        this.searhchHistory.update( history => ({
          ...history, 
          [query.toLowerCase()]: items
        }) )
      })
    )
  }
  getHistoryGifs (query: string): Gif[] {
    return this.searhchHistory()[query] ?? []
  }


}
