import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesEnum } from './shared/utils/routes.enum';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  { path: RoutesEnum.HOME, component: HomeComponent },
  { path: '', redirectTo: `/${RoutesEnum.HOME}`, pathMatch: 'full' }, // Empty route
  { path: '**', redirectTo: `/${RoutesEnum.HOME}` } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
