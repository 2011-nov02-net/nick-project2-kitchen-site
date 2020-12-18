import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import {
  OktaAuthModule,
  OKTA_CONFIG,
} from '@okta/okta-angular';

const config = {
  issuer: 'https://dev-723797.okta.com/oauth2/default',
  pkce: true,
  clientId: '0oa1m02l9jsKFNVeQ4x7',
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ['openid'],
  postLogoutRedirectUri: window.location.origin,
};

@NgModule({
  declarations: [AppComponent, KitchenComponent],
  imports: [BrowserModule, HttpClientModule, OktaAuthModule, AppRoutingModule],
  exports: [],
  providers: [{ provide: OKTA_CONFIG, useValue: config }],
  bootstrap: [AppComponent],
})
export class AppModule {}
