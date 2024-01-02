import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { ColorRatingDirective } from './directives/color-rating.directive';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    FilmItemComponent,
    ColorRatingDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    FilmItemComponent,
    ColorRatingDirective,
    MaterialModule,
  ],
})
export class SharedModule { }
