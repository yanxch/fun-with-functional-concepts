import {AppState} from '../reducers';

export const commits = (state: AppState) => state.commits.commits;
export const commitsLoadingState = (state: AppState) => state.commits.loading;
export const commitsFailuerState = (state: AppState) => state.commits.errors;

export const commitsAsRemoteData = (state: AppState) => state.commits2.commits;
