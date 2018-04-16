import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ActivityService } from './../../services/activity.service';
import { IActivity } from './../../models/activity.model';
import { RouteParamsEnum, RoutesEnum } from './../../../shared/utils/routes.enum';
import { IUser } from './../../../shared/models/user.model';
import { UtilsService } from './../../../shared/services/utils.service';

@Component({
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {

  private getActivitySubscription: any;

  public activity: IActivity;
  public activityUser: IUser;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const activityId = +params[RouteParamsEnum.ID]; // + converts string to number
      if (activityId) {
        this.getActivity(activityId);
      } else {
        this.redirectToHome();
      }
    });
  }

  private redirectToHome(): void {
    this.router.navigate([RoutesEnum.ACTIVITIES]);
  }

  private getActivity(activityId: number): void {
    this.utils.showLoading();
    this.activityService.getActivity(activityId).subscribe(
      response => {
        this.getActivityUser(response);
      },
      err => {
        this.router.navigate([RoutesEnum.ACTIVITIES]);
      },
      () => {
        this.utils.hideLoading();
      }
    );
  }

  private getActivityUser(activity: IActivity): void {
    this.utils.showLoading();
    this.activityService.getActivityUser(activity.userId).subscribe(
      response => {
        this.activity = activity;
        this.activityUser = response;
      },
      err => {
        this.router.navigate([RoutesEnum.ACTIVITIES]);
      },
      () => {
        this.utils.hideLoading();
      }
    );
  }

  public isActivityComplete(): boolean {
    return this.activity.title && this.activity.title !== '' &&
    this.activity.body && this.activity.body !== '';
  }

  public saveClick(): void {
    this.utils.showLoading();
    const body = {
      title: this.activity.title,
      body: this.activity.body
    };
    this.activityService.updateActivity(this.activity.id, body).subscribe(
      response => {
        this.utils.showMessage('Activity Updated');
      },
      err => {
        console.log(err);
        this.utils.showError('Error Updating Activity');
      },
      () => {
        this.utils.hideLoading();
      }
    );
  }
}
