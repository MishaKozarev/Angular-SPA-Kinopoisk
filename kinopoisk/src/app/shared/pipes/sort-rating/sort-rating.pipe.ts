import { Pipe, PipeTransform } from '@angular/core';
import { FilmItem } from 'src/app/kinopoisk/models/response.model';

@Pipe({
  name: 'sortRating',
})
export class SortRatingPipe implements PipeTransform {
  transform(
    items: FilmItem[],
  ): FilmItem[] {
    items.sort((a, b) => Number(b.rating) - Number(a.rating));
    return items;
  }
}
