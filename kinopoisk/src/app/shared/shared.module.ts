import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { ColorRatingDirective } from './directives/color-rating.directive';



@NgModule({
  declarations: [
    FilmItemComponent,
    ColorRatingDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilmItemComponent,
    ColorRatingDirective,
  ],
})
export class SharedModule { }
