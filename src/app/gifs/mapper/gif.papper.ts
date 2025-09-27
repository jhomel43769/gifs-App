import type { Gif } from '../interfaces/gif.interfaces';
import type { GiphyItem } from '../interfaces/giphy.interfaces';

export class GifMapper {
    static mapGiphItemToGif(item: GiphyItem): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.url
        };
    };

    static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
        return items.map(this.mapGiphItemToGif)
    }
}