import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmItemById, ResponseFilmsTop } from 'src/app/kinopoisk/models/response.model';
import { URL } from '../../constants/url';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly link: string = URL.link;

  private readonly films: string = URL.films;

  private readonly filmsTop: string = URL.top;

  private readonly httpLinkFilmTop: string = `${this.link}${this.films}${this.filmsTop}`;

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
}
