import {Component} from '@angular/core';

@Component({
  selector: 'card-header',
  template: `
    <!--ng-content></ng-content-->
    <ng-content select="card-header-avatar"></ng-content>
    <mat-card-title>
      <ng-content select="card-header-title"></ng-content>
    </mat-card-title>
    <mat-card-subtitle>
        <ng-content select="card-header-subtitle"></ng-content>
    </mat-card-subtitle>
  `,
  styleUrls: ['./card-header.scss']
})
export class CardHeaderComponent {}
//
//
@Component({
  selector: 'card-header-title',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./card-title.scss']
})
export class CardHeaderTitleComponent {}
//
//
@Component({
  selector: 'card-header-subtitle',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./card-title.scss']
})
export class CardHeaderSubTitleComponent {}