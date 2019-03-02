import {Component, Input, OnInit, ContentChild} from '@angular/core';
import {notAsked, RemoteData, success, failure} from './remote-data';

@Component({
  selector: 'Success',
  template: `
    <ng-content></ng-content>
  `
})
export class SuccessComponent<T> {
  value: T;
}

@Component({
  selector: 'Failure',
  template: `
    <ng-content></ng-content>
  `
})
export class FailureComponent<F> {
  value: F;
}

@Component({
  selector: 'Loading',
  template: `
    <ng-content></ng-content>
  `
})
export class LoadingComponent {}

@Component({
  selector: 'NotAsked',
  template: `
    <ng-content></ng-content>
  `
})
export class NotAskedComponent {}

@Component({
  selector: 'RemoteData',
  template: `
    <span *ngIf="remoteData.success">
      <ng-content select="Success"></ng-content>
    </span>
    <span *ngIf="remoteData.failure">
      <ng-content select="Failure"></ng-content>
    </span>
    <span *ngIf="remoteData.loading">
      <ng-content select="Loading"></ng-content>
    </span>
    <span *ngIf="remoteData.notAsked">
      <ng-content select="NotAsked"></ng-content>
    </span>
  `
})
export class RemoteDataComponent<S, F> {
  @Input() 
  private remoteData: RemoteData<S, F> = null;

  @ContentChild(SuccessComponent) someComponent: SuccessComponent<S>; 
  @ContentChild(FailureComponent) noneComponent: FailureComponent<F>;
  @ContentChild(LoadingComponent) loadingComponent: LoadingComponent;
  @ContentChild(NotAskedComponent) notAskedComponent: NotAskedComponent;

  constructor() {}
}
