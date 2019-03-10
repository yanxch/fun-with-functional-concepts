import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CommitsService} from 'src/api/commits.service';
import {CommitsEffects} from 'src/state/effects/commits.effects';
import {metaReducers, reducers} from '../state/reducers';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommitsWithNgrxComponent} from './commits-with-ngrx/commits-with-ngrx.component';
import {CommitsWithRemoteDataComponent} from './commits-with-remote-data/commits-with-remote-data.component';
import {CommitsComponent} from './commits/commits.component';
import {MaybeComponent, NoneComponent, SomeComponent} from './maybe/maybe.component';
import {MaybeDirective} from './maybe/maybe.directive';
import {RemoteDataDirective} from './remote-data/remote-data.directive';
import { FailureComponent } from './failure/failure.component';
import { CommitsWithNgrxActionListenerComponent } from './commits-with-ngrx-action-listener/commits-with-ngrx-action-listener.component';
import { CommitsWithNgrxRemoteDataComponent } from './commits-with-ngrx-remote-data/commits-with-ngrx-remote-data.component';


@NgModule({
  declarations: [
    AppComponent,
    MaybeComponent,
    SomeComponent,
    NoneComponent,
    MaybeDirective,
    RemoteDataDirective,
    CommitsComponent,
    CommitsWithNgrxComponent,
    CommitsWithRemoteDataComponent,
    FailureComponent,
    CommitsWithNgrxActionListenerComponent,
    CommitsWithNgrxRemoteDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CommitsEffects])
  ],
  providers: [
    CommitsService,
    CommitsEffects
  ],
  bootstrap: [AppComponent]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
