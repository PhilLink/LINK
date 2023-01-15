import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacityPlaygroundComponent } from './pages/capacity-playground/capacity-playground.component';

const routes: Routes = [
  { path: '', component: CapacityPlaygroundComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
