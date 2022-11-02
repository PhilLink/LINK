import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HqModulesModule } from '@link/hq-modules';
import { LinkAnimationModule } from '@link/link-animation';
import { LinkAssetsModule } from '@link/link-assets';
import { LinkUiModule } from '@link/link-ui';
import { LinkStyleModule } from '@link/link-style';

@NgModule({
  declarations: [AppComponent],
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
