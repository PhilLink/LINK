import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskScheduleComponent } from './tables/task-schedule/task-schedule.component';

import { LinkAssetsModule } from '@link/link-assets';
import { LinkStyleModule } from '@link/link-style';
import { LinkAnimationModule } from '@link/link-animation';
import { ExtMaterialModule } from '@link/ext-material';

@NgModule({
  imports: [
    CommonModule, 
    LinkAssetsModule, 
    LinkStyleModule, 
    LinkAnimationModule, 
    ExtMaterialModule
  ],
  declarations: [TaskScheduleComponent],
  exports: [TaskScheduleComponent],
})
export class TestModulesModule {}
