import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as commits from '../reducers/commits.reducer'

export interface State {
  commits: commits.State
}

export const reducers: ActionReducerMap<State> = {
  commits: commits.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
