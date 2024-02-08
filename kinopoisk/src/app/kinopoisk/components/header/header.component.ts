import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PageService } from 'src/app/core/services/page/page.service';
import { SortService } from '../../../core/services/sort/sort.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isShowPopup: boolean = false;

  public isNotHomeComponent: boolean = false;

  public currentRoute: string = '';

  public currentPage = '';

  public currentPage$!: Observable<string>;

  constructor(
    private sortService: SortService,
    private router: Router,
    private pageService: PageService,
  ) {}

  ngOnInit(): void {
    this.pageService.pageSubject$.subscribe((value) => {
      this.currentPage = value;
      if (this.currentPage !== 'home') {
        this.isNotHomeComponent = true;
      }
      console.log(this.currentPage);
    });
  }

  public addSortByDate(): void {
    this.sortService.sortByDate();
  }

  public routingOnTopFilmsPage(): void {
    this.router.navigate(['top-films']);
  }

  public showPopup() {
    this.isShowPopup = true;
  }

  public hidePopup() {
    this.isShowPopup = false;

  }
}
