import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { LoadingService } from './loading.service';

@Injectable()
export class UtilsService {

  constructor(
    public snackBar: MatSnackBar,
    public loadingService: LoadingService
  ) {
  }

  public showMessage(message: string): void {
    this.snackBar.open(message, '', {
      panelClass: 'dm-snackbar',
      duration: 1300,
      verticalPosition: 'top'
    });
  }

  public showError(message: string): void {
    this.snackBar.open(message, '', {
      panelClass: ['cl-snackbar', 'dm-snackbar--error'],
      duration: 1300,
      verticalPosition: 'top'
    });
  }

  public showLoading(): void {
    this.loadingService.show();
  }

  public hideLoading(): void {
    this.loadingService.hide();
  }
}
