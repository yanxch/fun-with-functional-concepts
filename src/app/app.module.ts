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
import {CardHeaderComponent, CardHeaderSubTitleComponent, CardHeaderTitleComponent} from './components/card/card-header.component';
import {CardComponent} from './components/card/card.component';
import {CenteredDirective} from './components/centered/centered.directive';
import {CommitsComponent} from './components/commits/commits.component';
import {FailureComponent} from './components/failure/failure.component';
import {GithubSearchFormComponent} from './components/github-search-form/github-search-form.component';
import {GithubSearchResultComponent} from './components/github-search-result/github-search-result.component';
import {LoadingComponent} from './components/loading/loading.component';
import {MaybeComponent, NoneComponent, SomeComponent} from './components/maybe/maybe.component';
import {MaybeDirective} from './components/maybe/maybe.directive';
import {RemoteDataDirective} from './components/remote-data/remote-data.directive';
import {CommitsWithNgrxActionListenerContainer} from './container/commits-with-ngrx-action-listener/commits-with-ngrx-action-listener.container';
import {CommitsWithNgrxContainer} from './container/commits-with-ngrx/commits-with-ngrx.container';
import {CommitsWithServiceContainer} from './container/commits-with-service/commits-with-service.container';
import {CommitsView} from './views/commits-view';
import {CommitsWithRemoteDataContainer} from './container/commits-with-remote-data/commits-with-remote-data.container';
import {CommitsWithNgrxRemoteDataContainer} from './container/commits-with-ngrx-remote-data/commits-with-ngrx-remote-data.container';
import {RouteComponent} from './components/router/route.component';
import {RouteParamsDirective} from './components/router/route-params.directive';


@NgModule({
  declarations: [
    AppComponent,
    MaybeComponent,
    SomeComponent,
    NoneComponent,
    MaybeDirective,
    RemoteDataDirective,
    CommitsComponent,
    CommitsWithNgrxContainer,
    CommitsWithRemoteDataContainer,
    FailureComponent,
    CommitsWithNgrxActionListenerContainer,
    CommitsWithNgrxRemoteDataContainer,
    CardComponent,
    CardHeaderComponent,
    CardHeaderTitleComponent,
    CardHeaderSubTitleComponent,
    CommitsWithServiceContainer,
    GithubSearchFormComponent,
    GithubSearchResultComponent,
    CenteredDirective,
    CommitsView,
    LoadingComponent,
    RouteComponent,
    RouteParamsDirective
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
