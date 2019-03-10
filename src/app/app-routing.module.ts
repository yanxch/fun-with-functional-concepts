import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommitsWithNgrxActionListenerComponent} from './commits-with-ngrx-action-listener/commits-with-ngrx-action-listener.component';
import {CommitsWithNgrxRemoteDataComponent} from './commits-with-ngrx-remote-data/commits-with-ngrx-remote-data.component';
import {CommitsWithNgrxComponent} from './commits-with-ngrx/commits-with-ngrx.component';
import {CommitsWithRemoteDataComponent} from './commits-with-remote-data/commits-with-remote-data.component';

const routes: Routes = [
  {
    path: 'commits-with-remote-data',
    component: CommitsWithRemoteDataComponent
  },
  {
    path: 'commits-with-ngrx',
    component: CommitsWithNgrxComponent
  },
  {
    path: 'commits-with-ngrx-action-listener',
    component: CommitsWithNgrxActionListenerComponent
  },
  {
    path: 'commits-with-ngrx-remote-data',
    component: CommitsWithNgrxRemoteDataComponent
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
