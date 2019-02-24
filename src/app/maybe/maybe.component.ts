import {Component, Input, OnInit, ContentChild} from '@angular/core';
import {Option, some, none, Some } from 'fp-ts/lib/Option'

@Component({
  selector: 'Some',
  template: `
    <ng-content></ng-content>
  `
})
export class SomeComponent {
  option: Option<any> = none;

  
}

@Component({
  selector: 'None',
  template: `
    <ng-content></ng-content>
  `
})
export class NoneComponent {
  option: Option<any> = none;
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

  @ContentChild(SomeComponent) someComponent; 
  @ContentChild(NoneComponent) noneComponent;

  private option: Option<T> = none;

  ngOnInit() {
    this.in
      .then((value: T) => this.setSome(value))
      .catch(error => this.setNone());
  }

  private setSome(value: T) {
    console.log('setSome: ' + value);
    this.option = some(value);
    this.setChilds();
  }

  private setNone() {
    this.option = none;
    this.setChilds();
  }

  private setChilds() {
    this.someComponent.option = this.option;
    this.noneComponent.option = this.option;
  }
}
