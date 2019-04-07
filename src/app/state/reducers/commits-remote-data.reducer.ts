import * as Commits from '../actions/commits.actions';
import {Failure} from '../model/failure';
import {RemoteData, notAsked, loading, success, failure} from '@state/model/remote-data';
import {Commit} from '@api/commits.api';

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