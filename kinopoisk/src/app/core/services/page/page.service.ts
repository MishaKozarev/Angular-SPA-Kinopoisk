import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  private pageSubject = new Subject<string>();

  pageSubject$ = this.pageSubject.asObservable();

  currentPage(page: string) {
    this.pageSubject.next(page);
  }
}
