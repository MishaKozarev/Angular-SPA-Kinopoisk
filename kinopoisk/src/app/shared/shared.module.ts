import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { ColorRatingDirective } from './directives/color-rating.directive';
import { MaterialModule } from './material/material.module';
import { SortDatePipe } from './pipes/sort-date/sort-date.pipe';

@NgModule({
  declarations: [
    FilmItemComponent,
    ColorRatingDirective,
    SortDatePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    FilmItemComponent,
    ColorRatingDirective,
    MaterialModule,
    SortDatePipe,
  ],
})
export class SharedModule { }
