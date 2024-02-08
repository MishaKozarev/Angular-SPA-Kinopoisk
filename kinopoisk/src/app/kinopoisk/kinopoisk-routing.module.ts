import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PremieresComponent } from './components/premieres/premieres.component';
import { TopFilmsComponent } from './components/top-films/top-films.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'top-films',
        component: TopFilmsComponent,
      },
      {
        path: 'premieres',
        component: PremieresComponent,
      },
      {
        path: ':id',
        component: DetailPageComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KinopoiskRoutingModule { }
