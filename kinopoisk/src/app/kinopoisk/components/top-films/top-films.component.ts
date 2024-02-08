import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { PageService } from 'src/app/core/services/page/page.service';
import { SortService } from 'src/app/core/services/sort/sort.service';
import { ResponseFilmsTop } from '../../models/response.model';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.scss'],
})
export class TopFilmsComponent implements OnInit {
  public filmsTop$!: Observable<ResponseFilmsTop>;

  constructor(
    private httpService: HttpService,
    public sortService: SortService,
    private pageService: PageService,
  ) {}

  ngOnInit(): void {
    this.filmsTop$ = this.httpService.getFilmsTop();
    this.pageService.currentPage('films');
  }

}
