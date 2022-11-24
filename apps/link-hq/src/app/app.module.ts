import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LinkStyleModule } from '@link/link-style';
import { LinkUiModule } from '@link/link-ui';
import { LinkAssetsModule } from '@link/link-assets';
import { LinkAnimationModule } from '@link/link-animation';

import { HqModulesModule } from '@link/hq-modules';
import { HqLandingComponent } from './pages/hq-landing/hq-landing.component';

@NgModule({
  declarations: [AppComponent, HqLandingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    LinkStyleModule,
    LinkUiModule,
    LinkAssetsModule,
    LinkAnimationModule,
    HqModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
