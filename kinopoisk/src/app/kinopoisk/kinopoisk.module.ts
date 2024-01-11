import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KinopoiskRoutingModule } from './kinopoisk-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { TopFilmsComponent } from './components/top-films/top-films.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DetailPageComponent,
    TopFilmsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    KinopoiskRoutingModule,
  ],
})
export class KinopoiskModule { }
