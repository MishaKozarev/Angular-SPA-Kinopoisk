import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmItem } from 'src/app/kinopoisk/models/response.model';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})
export class FilmItemComponent implements OnInit {
  @Input() public itemFilm!: FilmItem;

  @Input() public indexFilm!: number;

  public currentId!: string;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.currentId = String(this.itemFilm.filmId);
  }

  public routingOnDetailPage(id: number): void {
    this.router.navigate([`${id}`]);
  }
}
