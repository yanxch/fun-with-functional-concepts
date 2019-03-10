
export type Success<S> = { 
  success: S;
}

export type Failure<F> = {
  failure: F;
}

export type NotAsked = {
  notAsked: true;
}

export type Loading = {
  loading: true;
}

export type RemoteData<S, F> = Success<S> | Failure<F> | NotAsked | Loading; 
//
//
export const notAsked: NotAsked = {
  notAsked: true
};

export const loading: Loading = {
  loading: true
};

export function success<S>(success: S): Success<S> {
  return {
    success
  };
}

export function failure<F>(failure: F): Failure<F> {
  return {
    failure
  };
}

/*
example of remote data:

const remoteData: RemoteData<string, number> = {
  success: 'test',
  failure: null,
  notAsked: false,
  loading: false
};

*/