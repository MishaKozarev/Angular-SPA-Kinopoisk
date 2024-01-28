import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from '../core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kinopoisk',
    pathMatch: 'full',
  },
  {
    path: 'kinopoisk',
    loadChildren: () =>
      import('../kinopoisk/kinopoisk.module').then((m) => m.KinopoiskModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
