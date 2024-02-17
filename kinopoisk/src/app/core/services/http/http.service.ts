import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActorItem, FilmItemById, FilmsPremiers, ResponseFilmsTop } from 'src/app/kinopoisk/models/response.model';
import { URL } from '../../constants/url';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly link: string = URL.link;

  private readonly films: string = URL.films;

  private readonly actors: string = URL.actors;

  private readonly filmsTop: string = URL.top;

  private readonly filmsPremieres: string = URL.premieres;

  private readonly httpLinkFilmTop: string = `${this.link}${this.films}${this.filmsTop}`;

  private readonly premieres: string = `${this.filmsPremieres}`;

  constructor(private http: HttpClient) { }

  public getFilmsTop() {
    const headers = {
      'X-API-KEY': URL.apiKey,
      'Content-Type': 'application/json',
    };
    return this.http.get<ResponseFilmsTop>(this.httpLinkFilmTop, { headers });
  }

  public getFilmById(id: string) {
    const headers = {
      'X-API-KEY': URL.apiKey,
      'Content-Type': 'application/json',
    };
    return this.http.get<FilmItemById>(`${this.link}${this.films}${id}`, { headers });
  }

  public getFilsPremieres() {
    const headers = {
      'X-API-KEY': URL.apiKey,
      'Content-Type': 'application/json',
    };

    const params = new HttpParams().set('year', 2024).set('month', 'JANUARY');
    return this.http.get<FilmsPremiers>(`${this.link}${this.films}${this.premieres}`, { headers, params });
  }

  public getFilsActors(filmId: number) {
    const headers = {
      'X-API-KEY': URL.apiKey,
      'Content-Type': 'application/json',
    };
    const params = new HttpParams().set('filmId', filmId);
    return this.http.get<ActorItem[]>(`${this.link}${this.actors}`, { headers, params });
  }
}
