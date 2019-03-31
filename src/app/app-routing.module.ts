import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommitsView} from './views/commits-view';

const routes: Routes = [
  {
    path: 'commits/:usernameParam',
    component: CommitsView
  },
  {
    path: '',
    redirectTo: '/commits/yanxch',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
