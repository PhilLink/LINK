import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LinkStyleModule } from '@link/link-style';
import { LinkUiModule } from '@link/link-ui';
import { LinkAssetsModule } from '@link/link-assets';
import { LinkAnimationModule } from '@link/link-animation';
import { HqModulesModule } from '@link/hq-modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
