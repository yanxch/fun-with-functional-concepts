import * as Commits from '../actions/commits.actions';
import {Failure} from '../model/failure';
import {Commit} from '@api/commits.api';

export interface State {
  loading: boolean;
  errors: Failure[];
  commits: Commit[];
}

export const initialState: State = {
  loading: false,
  errors: [],
  commits: null
};

export function reducer(
  state = initialState, 
  action: Commits.CommitsActionsUnion
): State {
  switch (action.type) {
    case Commits.CommitActionTypes.LoadCommits: {
      return {
        ...state,
        loading: true,
        commits: null,
        errors: []
      };
    }

    case Commits.CommitActionTypes.LoadCommitsSuccess: {
      return {
        ...state,
        loading: false,
        commits: action.payload.commits
      };
    }

    case Commits.CommitActionTypes.LoadCommitsFailure: {
      return {
        ...state,
        commits: null,
        loading: false,
        errors: action.payload.errors
      };
    }

    default:
      return state;
  }
}