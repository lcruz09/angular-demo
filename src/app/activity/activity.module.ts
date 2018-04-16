import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ActivityComponent } from './components/activity/activity.component';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { ActivityService } from './services/activity.service';
import { ActivityRoutingModule } from './activity-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule.forRoot(),
    ActivityRoutingModule
  ],
  declarations: [
    ActivityComponent,
    ActivityItemComponent,
    ActivityDetailComponent
  ],
  exports: [
    ActivityComponent,
    ActivityItemComponent,
    ActivityDetailComponent
  ],
  providers: [
    ActivityService
  ]
})
export class ActivityModule { }