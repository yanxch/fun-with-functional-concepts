import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatListModule, MatIconModule} from '@angular/material';

import {AppComponent} from './app.component';
import {MaybeComponent, SomeComponent, NoneComponent} from './maybe/maybe.component';
import {MaybeDirective} from './maybe/maybe.directive';
import {RemoteDataDirective} from './remote-data/remote-data.directive';
import { CommitsComponent } from './commits/commits.component';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../state/reducers';

@NgModule({
  declarations: [
    AppComponent,
    MaybeComponent,
    SomeComponent,
    NoneComponent,
    MaybeDirective,
    RemoteDataDirective,
    CommitsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {



 }
