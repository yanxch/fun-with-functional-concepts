import * as Commits from '../actions/commits.actions';
import {Commit} from 'src/api/commits.api';
import {Failure} from '../model/failure';
import {RemoteData, notAsked, loading, success, failure} from 'src/app/remote-data/remote-data';

export interface State {
  commits: RemoteData<Commit[], Failure[]>;
}

export const initialState: State = {
  commits: notAsked
};

export function reducer(
  state = initialState, 
  action: Commits.CommitsActionsUnion
): State {
  switch (action.type) {
    case Commits.CommitActionTypes.LoadCommits: {
      return {
        ...state,
        commits: loading
      };
    }

    case Commits.CommitActionTypes.LoadCommitsSuccess: {
      return {
        ...state,
        commits: success(action.payload.commits)
      };
    }

    case Commits.CommitActionTypes.LoadCommitsFailure: {
      return {
        ...state,
        commits: failure(action.payload.errors)
      };
    }

    default:
      return state;
  }
}