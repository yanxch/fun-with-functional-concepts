import {Component, Input, OnInit, ContentChild} from '@angular/core';
import {Option, some, none, Some } from 'fp-ts/lib/Option'

@Component({
  selector: 'Some',
  template: `
    <ng-content></ng-content>
  `
})
export class SomeComponent<T> {
  value: T;
}

@Component({
  selector: 'None',
  template: `
    <ng-content></ng-content>
  `
})
export class NoneComponent {
}

@Component({
  selector: 'Maybe',
  template: `
    <span *ngIf="option.isSome()">
      <ng-content select="Some"></ng-content>
    </span>
    <span *ngIf="option.isNone()">
      <ng-content select="None"></ng-content>
    </span>
  `
})
export class MaybeComponent<T> implements OnInit{
  @Input() 
  in: Promise<T>;

  @ContentChild(SomeComponent) someComponent: SomeComponent<T>; 
  @ContentChild(NoneComponent) noneComponent: NoneComponent;

  private option: Option<T> = none;

  ngOnInit() {
    this.in
      .then((value: T) => this.setSome(value))
      .catch(error => this.setNone());
  }

  private setSome(value: T) {
    this.option = some(value)
      .map(value => this.someComponent.value = value);
  }

  private setNone() {
    this.option = none;
  }
}
