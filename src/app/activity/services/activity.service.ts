import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IActivity } from './../models/activity.model';
import { RequestService } from './../../shared/services/request.service';

@Injectable()
export class ActivityService {

  private routes = {
    ACTIVITY: '/posts',
    USER: '/users'
  };

  constructor(
    private request: RequestService
  ) {
  }

  /**
   * Gets the list of activities from API
   */
  public getActivities(): Observable<Array<IActivity>> {
    return this.request.get(this.routes.ACTIVITY);
  }

  public getActivity(activityId: number): Observable<IActivity> {
    return this.request.get(`${this.routes.ACTIVITY}/${activityId}`); // posts/:id
  }

  public updateActivity(activityId: number, body: any): Observable<IActivity> {
    return this.request.put(`${this.routes.ACTIVITY}/${activityId}`, body);
  }

  public getActivityUser(userId: number): Observable<any> {
    return this.request.get(`${this.routes.USER}/${userId}`); // users/id
  }
}
