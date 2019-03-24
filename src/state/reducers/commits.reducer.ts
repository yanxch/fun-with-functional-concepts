import * as Commits from '../actions/commits.actions';
import {Commit} from 'src/api/commits.api';
import {Failure} from '../model/failure';

export interface State {
  loading: boolean;
  errors: Failure[];
  commits: Commit[];
}

export const initialState: State = {
  loading: false,
  errors: [],
  commits: []
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
        commits: [],
        loading: false,
        errors: action.payload.errors
      };
    }

    default:
      return state;
  }
}