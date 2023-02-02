import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademyLandingComponent } from './pages/academy-landing/academy-landing.component';

const routes: Routes = [
  { path: '', component: AcademyLandingComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
