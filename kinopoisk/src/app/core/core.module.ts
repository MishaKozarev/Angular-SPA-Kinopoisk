import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LogoHeaderComponent } from './components/logo-header/logo-header.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { IconSearchComponent } from './components/icon-search/icon-search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoHeaderComponent,
    FormHeaderComponent,
    IconSearchComponent,
    NotFoundPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
