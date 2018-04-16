import { Component, OnInit, Input } from '@angular/core';

import { IActivity } from './../../models/activity.model';
import { Router } from '@angular/router';
import { RoutesEnum } from '../../../shared/utils/routes.enum';

@Component({
  selector: 'dm-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent implements OnInit {

  @Input() activity: IActivity;
  @Input() showViewMore: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public viewMoreClick(): void {
    this.router.navigate([`/activity`, this.activity.id]);
  }

}
