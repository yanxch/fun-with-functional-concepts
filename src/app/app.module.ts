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
import {CommitsWithNgrxActionListenerComponent} from './commits-with-ngrx-action-listener/commits-with-ngrx-action-listener.component';
import {CommitsWithNgrxRemoteDataComponent} from './commits-with-ngrx-remote-data/commits-with-ngrx-remote-data.component';
import {CommitsWithNgrxComponent} from './commits-with-ngrx/commits-with-ngrx.component';
import {CommitsWithRemoteDataComponent} from './commits-with-remote-data/commits-with-remote-data.component';
import {CommitsComponent} from './components/commits/commits.component';
import {FailureComponent} from './components/failure/failure.component';
import {MaybeComponent, NoneComponent, SomeComponent} from './components/maybe/maybe.component';
import {MaybeDirective} from './components/maybe/maybe.directive';
import {RemoteDataDirective} from './components/remote-data/remote-data.directive';
import { CardComponent } from './components/card/card.component';
import { CommitsWithServiceComponent } from './commits-with-service/commits-with-service.component';


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
    CommitsWithNgrxRemoteDataComponent,
    CardComponent,
    CommitsWithServiceComponent
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
