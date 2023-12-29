import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './components/film-item/film-item.component';



@NgModule({
  declarations: [
    FilmItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FilmItemComponent,
  ],
})
export class SharedModule { }
