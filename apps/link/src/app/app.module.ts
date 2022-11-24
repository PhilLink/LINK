import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExtMaterialModule } from '@link/ext-material';
import { LinkUiModule } from '@link/link-ui';
import { LinkAssetsModule } from '@link/link-assets';
import { LinkStyleModule } from '@link/link-style';
import { LinkAnimationModule } from '@link/link-animation';
import { DefaultIntroComponent } from './intros/default-intro/default-intro.component';

@NgModule({
  declarations: [AppComponent, DefaultIntroComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ExtMaterialModule,
    LinkUiModule,
    LinkAssetsModule,
    LinkStyleModule,
    LinkAnimationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
