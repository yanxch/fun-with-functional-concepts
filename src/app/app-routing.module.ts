import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommitsView} from './views/commits-view';

const routes: Routes = [
  {
    path: 'commits-with-service',
    component: CommitsView
  },
  {
    path: 'commits-with-remote-data',
    component: CommitsView
  },
  {
    path: 'commits-with-ngrx',
    component: CommitsView
  },
  {
    path: 'commits-with-ngrx-action-listener',
    component: CommitsView
  },
  {
    path: 'commits-with-ngrx-remote-data',
    component: CommitsView
  },
  {
    path: '',
    redirectTo: '/commits-with-remote-data',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
