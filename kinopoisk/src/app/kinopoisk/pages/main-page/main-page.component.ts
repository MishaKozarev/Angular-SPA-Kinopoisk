import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { FilmsPremiers } from '../../models/response.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public filmsPremieres$!: Observable<FilmsPremiers>;

  constructor(
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.filmsPremieres$ = this.httpService.getFilsPremieres();
  }
}
