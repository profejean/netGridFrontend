import { PublicModule } from './public/public.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureComponent } from './secure/secure.component';
import { AccountComponent } from './secure/account/account.component';
import { SecureModule } from './secure/secure.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    PublicModule,
    SecureModule
  ],
  providers: [AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
