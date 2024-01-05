import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { FilmItemById } from '../../models/response.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  public currentId = '';

  public filmById$!: Observable<FilmItemById>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.currentId = params['id'];
    });
    this.filmById$ = this.httpService.getFilmById(this.currentId);
  }
}
