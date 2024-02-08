import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageService } from 'src/app/core/services/page/page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(
    private pageService: PageService,
  ) {}

  ngOnInit(): void {
    this.pageService.currentPage('home');
  }

  ngOnDestroy(): void {
    this.pageService.currentPage('');
  }
}
