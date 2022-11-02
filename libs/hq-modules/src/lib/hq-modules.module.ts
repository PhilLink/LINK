import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtMaterialModule } from '@link/ext-material';
import { LinkStyleModule } from '@link/link-style';

import { HqSettingsComponent } from './hq-settings/hq-settings.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  imports: [CommonModule, LinkStyleModule, ExtMaterialModule],
  declarations: [HqSettingsComponent, UserSettingsComponent],
  exports: [HqSettingsComponent, UserSettingsComponent],
})
export class HqModulesModule {}
