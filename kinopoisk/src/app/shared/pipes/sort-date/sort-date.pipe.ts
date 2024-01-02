import { Pipe, PipeTransform } from '@angular/core';
import { FilmItem } from 'src/app/kinopoisk/models/response.model';

@Pipe({
  name: 'sortDate',
})
export class SortDatePipe implements PipeTransform {
  transform(
    items: FilmItem[], isSort: boolean, ascendDate: boolean,
  ): FilmItem[] {
    if (isSort) {
      return ascendDate
        ? items.sort((a, b) => Number(a.year) - Number(b.year))
        : items.sort((a, b) => Number(b.year) - Number(a.year));
    } else {
      return items;
    }
  }
}
