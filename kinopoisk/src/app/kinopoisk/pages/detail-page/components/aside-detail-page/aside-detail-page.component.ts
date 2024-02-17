import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ActorItem, FilmItemById } from 'src/app/kinopoisk/models/response.model';

@Component({
  selector: 'app-aside-detail-page',
  templateUrl: './aside-detail-page.component.html',
  styleUrls: ['./aside-detail-page.component.scss'],
})
export class AsideDetailPageComponent implements OnInit {
  @Input() public filmById!: FilmItemById;

  public filmActors$!: Observable<ActorItem[]>;

  public currentId!: number;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.currentId = params['id'];
    });
    this.filmActors$ = this.httpService.getFilsActors(this.currentId);
  }

}
