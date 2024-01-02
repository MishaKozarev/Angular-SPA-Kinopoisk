import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { SortService } from 'src/app/core/services/sort/sort.service';
import { ResponseFilmsTop } from '../../models/response.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public filmsList$!: Observable<ResponseFilmsTop>;


  constructor(
    private httpService: HttpService,
    public sortService: SortService,
  ) {}

  ngOnInit(): void {
    this.filmsList$ = this.httpService.getFilmsTop();
  }
}
