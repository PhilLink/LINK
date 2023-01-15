import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LinkStyleModule } from '@link/link-style';
import { LinkUiModule } from '@link/link-ui';
import { LinkAssetsModule } from '@link/link-assets';
import { LinkAnimationModule } from '@link/link-animation';
import { HqModulesModule } from '@link/hq-modules';
import { TestModulesModule } from '@link/test-modules';
import { AppRoutingModule } from './app-routing.module';
import { CapacityPlaygroundComponent } from './pages/capacity-playground/capacity-playground.component';
import { ExtMaterialModule } from '@link/ext-material';

@NgModule({
  declarations: [
    AppComponent,
    CapacityPlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    AppRoutingModule,
    ExtMaterialModule,
    LinkStyleModule,
    LinkUiModule,
    LinkAssetsModule,
    LinkAnimationModule,
    HqModulesModule,
    TestModulesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
