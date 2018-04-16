import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './../material/material.module';
import { RequestService } from './services/request.service';
import { UtilsService } from './services/utils.service';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './components/loading/loading.component';


export let providers = [
  RequestService,
  UtilsService,
  LoadingService
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    LoadingComponent,
  ],
  exports: [
    NavbarComponent,
    LoadingComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: providers
    };
  }
}
