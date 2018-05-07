import { Component, OnInit } from '@angular/core';

import { ActivityService } from './../../services/activity.service';
import { IActivity } from './../../models/activity.model';
import { UtilsService } from './../../../shared/services/utils.service';

@Component({
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
