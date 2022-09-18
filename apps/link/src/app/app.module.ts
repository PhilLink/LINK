import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LinkUiModule } from '@link/link-ui';
import { LinkAssetsModule } from '@link/link-assets';
import { LinkStyleModule } from '@link/link-style';
import { LinkAnimationModule } from '@link/link-animation';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LinkUiModule,
    LinkAssetsModule,
    LinkStyleModule,
    LinkAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
