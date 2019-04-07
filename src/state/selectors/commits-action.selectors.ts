import {ofType} from '@ngrx/effects';
import {merge, Observable} from 'rxjs';
import {map, mapTo, tap} from 'rxjs/operators';

// Custom RxJs operators:
export const selectLoading = (actiontype: string) => (source: Observable<any>) => merge(
  source.pipe(ofType(actiontype), tap(() => console.log(actiontype)), mapTo(true)),
  source.pipe(ofType(actiontype + ' Failure'), tap(() => console.log(actiontype + ' Failure')), mapTo(false)),
  source.pipe(ofType(actiontype + ' Success'), tap(() => console.log(actiontype + ' Success')), mapTo(false))
);

export const selectFailures = (actiontype: string) => (source: Observable<any>) => merge(
  source.pipe(ofType(actiontype), mapTo([])),
  source.pipe(ofType(actiontype + ' Failure'), map((action: any) => action.payload.errors))
);



const log = (message) => tap(() => console.log(message))