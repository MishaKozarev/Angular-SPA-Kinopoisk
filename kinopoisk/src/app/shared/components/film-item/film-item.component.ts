import { Component, Input } from '@angular/core';
import { FilmItem } from 'src/app/kinopoisk/models/response.model';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})
export class FilmItemComponent {
  @Input() itemFilm!: FilmItem;

  @Input() indexFilm!: number;
}
