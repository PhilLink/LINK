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
import { AppRoutingModule } from './app-routing.module';
import { AcademyLandingComponent } from './pages/academy-landing/academy-landing.component';
import { ExtMaterialModule } from '@link/ext-material';
import { AcademyIntroComponent } from './sections/academy-intro/academy-intro.component';
import { CoursePlayerComponent } from './components/course-player/course-player.component';
import { CoursePlaylistComponent } from './components/course-playlist/course-playlist.component';
import { CourseAssetsComponent } from './components/course-assets/course-assets.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { SplashComponent } from './pages/splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademyLandingComponent,
    AcademyIntroComponent,
    CoursePlayerComponent,
    CoursePlaylistComponent,
    CourseAssetsComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    ExtMaterialModule,
    LinkStyleModule,
    LinkUiModule,
    LinkAssetsModule,
    LinkAnimationModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    HqModulesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
