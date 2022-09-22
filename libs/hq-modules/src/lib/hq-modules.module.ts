import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HqSettingsComponent } from './hq-settings/hq-settings.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HqSettingsComponent],
  exports: [HqSettingsComponent],
})
export class HqModulesModule {}
