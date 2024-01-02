import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  public isSortDate = false;

  public ascendDate = true;

  public sortByDate(): void {
    this.isSortDate = true;
    this.ascendDate = !this.ascendDate;
  }
}
