import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KinopoiskRoutingModule } from './kinopoisk-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    KinopoiskRoutingModule,
  ],
})
export class KinopoiskModule { }
