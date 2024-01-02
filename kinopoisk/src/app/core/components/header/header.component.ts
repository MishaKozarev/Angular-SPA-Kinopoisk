import { Component } from '@angular/core';
import { SortService } from '../../services/sort/sort.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private sortService: SortService) {}

  public addSortByDate(): void {
    this.sortService.sortByDate();
  }
}
