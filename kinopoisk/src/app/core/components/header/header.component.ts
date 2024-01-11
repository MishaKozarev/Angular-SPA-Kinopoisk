import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from '../../services/sort/sort.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private sortService: SortService,
    private router: Router,
  ) {}

  public addSortByDate(): void {
    this.sortService.sortByDate();
  }

  public routingOnTopFilmsPage(): void {
    this.router.navigate(['top-films']);
  }
}
