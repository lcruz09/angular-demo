import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ActivityRoutingModule } from './activity-routing.module';

import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { ActivityService } from './services/activity.service';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { ArticleDetailGuard } from './services/activity-detail-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    MaterialModule,
    ActivityRoutingModule
  ],
  declarations: [
    ActivitiesComponent,
    ActivityItemComponent,
    ActivityDetailComponent
  ],
  exports: [
    ActivitiesComponent,
    ActivityItemComponent,
    ActivityDetailComponent
  ],
  providers: [
    ActivityService,
    ArticleDetailGuard
  ]
})
export class ActivityModule { }
