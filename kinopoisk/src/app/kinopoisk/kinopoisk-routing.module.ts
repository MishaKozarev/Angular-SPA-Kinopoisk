import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopFilmsComponent } from './components/top-films/top-films.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'top-films',
    component: TopFilmsComponent,
  },
  {
    path: ':id',
    component: DetailPageComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KinopoiskRoutingModule { }
