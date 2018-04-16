import { Component, OnInit } from '@angular/core';

import { ActivityService } from './../../services/activity.service';
import { IActivity } from './../../models/activity.model';
import { UtilsService } from './../../../shared/services/utils.service';

@Component({
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  public activities: Array<IActivity>;

  constructor(
    private activityService: ActivityService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.loadActivities();
  }

  public loadActivities(): void {
    this.utils.showLoading();
    this.activityService.getActivities().subscribe(
      (response: Array<IActivity>) => {
        this.activities = response;
      },
      (err: any) => {
        console.log(err);
        this.utils.showError('Error Loading Activities');
      },
      () => {
        this.utils.hideLoading();
      }
    );
  }

}
