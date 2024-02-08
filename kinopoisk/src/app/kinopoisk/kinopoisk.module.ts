import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KinopoiskRoutingModule } from './kinopoisk-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { TopFilmsComponent } from './components/top-films/top-films.component';
import { HeaderComponent } from './components/header/header.component';
import { FormHeaderComponent } from './components/header/form-header/form-header.component';
import { LogoHeaderComponent } from './components/header/logo-header/logo-header.component';
import { IconSearchComponent } from './components/header/icon-search/icon-search.component';
import { BtnSigninHeaderComponent } from './components/header/btn-signin-header/btn-signin-header.component';
import { BtnWatchHeaderComponent } from './components/header/btn-watch-header/btn-watch-header.component';
import { PremieresComponent } from './components/premieres/premieres.component';
import { WidgetComponent } from './pages/home-page/components/widget/widget.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavigationComponent } from './pages/home-page/components/navigation/navigation.component';
import { NewsBlockComponent } from './pages/home-page/components/news-block/news-block.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    LogoHeaderComponent,
    FormHeaderComponent,
    IconSearchComponent,
    BtnSigninHeaderComponent,
    BtnWatchHeaderComponent,
    DetailPageComponent,
    TopFilmsComponent,
    PremieresComponent,
    WidgetComponent,
    NavigationComponent,
    HomePageComponent,
    NewsBlockComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    KinopoiskRoutingModule,
  ],
})
export class KinopoiskModule { }
