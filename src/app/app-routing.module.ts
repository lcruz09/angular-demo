import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesEnum } from './shared/utils/routes.enum';

const routes: Routes = [
  { path: '', redirectTo: `/${RoutesEnum.ACTIVITIES}`, pathMatch: 'full' }, // Empty route
  { path: '**', redirectTo: `/${RoutesEnum.ACTIVITIES}` } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
