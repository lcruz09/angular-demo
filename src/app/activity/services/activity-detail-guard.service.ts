import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class ArticleDetailGuard implements CanActivate {

  canActivate() {
    return true;
  }
}
