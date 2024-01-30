import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { BtnYandexIdComponent } from './components/btn-yandex-id/btn-yandex-id.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { BtnComeBackComponent } from './components/btn-come-back/btn-come-back.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ContentProvidersComponent } from './components/content-providers/content-providers.component';

@NgModule({
  declarations: [
    SigninPageComponent,
    BtnYandexIdComponent,
    BtnComeBackComponent,
    AuthFormComponent,
    ContentProvidersComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
