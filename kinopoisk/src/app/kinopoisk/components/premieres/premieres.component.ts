import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { FilmsPremiers } from '../../models/response.model';

@Component({
  selector: 'app-premieres',
  templateUrl: './premieres.component.html',
  styleUrls: ['./premieres.component.scss'],
})
export class PremieresComponent implements OnInit {
  public filmsPremieres$!: Observable<FilmsPremiers>;

  constructor(
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.filmsPremieres$ = this.httpService.getFilsPremieres();
  }
}
