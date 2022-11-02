import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHeaderComponent } from './default-header/default-header.component';

import { LinkAssetsModule } from '@link/link-assets';
import { LinkStyleModule } from '@link/link-style';
import { LinkAnimationModule } from '@link/link-animation';
import { ExtMaterialModule } from '@link/ext-material';

@NgModule({
  imports: [
    CommonModule, 
    ExtMaterialModule,
    LinkAssetsModule, 
    LinkStyleModule, 
    LinkAnimationModule
  ],
  declarations: [DefaultHeaderComponent],
  exports: [DefaultHeaderComponent],
})
export class LinkUiModule {}
