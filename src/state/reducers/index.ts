import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as commits from '../reducers/commits.reducer'
import * as commits2 from '../reducers/commits-remote-data.reducer'

export interface AppState {
  commits: commits.State,
  commits2: commits2.State
}

export const reducers: ActionReducerMap<AppState> = {
  commits: commits.reducer,
  commits2: commits2.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
