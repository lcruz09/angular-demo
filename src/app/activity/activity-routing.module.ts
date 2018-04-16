import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesEnum, RouteParamsEnum } from './../shared/utils/routes.enum';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { ArticleDetailGuard } from './services/activity-detail-guard.service';

const activityRoutes: Routes = [
  { path: RoutesEnum.ACTIVITIES, component: ActivitiesComponent },
  { path: `${RoutesEnum.ACTIVITY_DETAIL}/:${RouteParamsEnum.ID}`, canActivate: [ArticleDetailGuard], component: ActivityDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(activityRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ActivityRoutingModule { }
