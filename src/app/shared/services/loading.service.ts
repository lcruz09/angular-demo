import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

  public visible: boolean;
  public lockCounter: number;

  constructor() {
    this.visible = false;
    this.lockCounter = 0;
  }

  public show(): void {
    this.lockCounter++;
    this.visible = true;
  }

  public hide(): void {
    this.lockCounter--;
    if (this.lockCounter <= 0) {
      this.lockCounter = 0;
      this.visible = false;
    }
  }
}
