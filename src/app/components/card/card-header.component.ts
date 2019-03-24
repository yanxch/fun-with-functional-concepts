import {Component, Attribute} from '@angular/core';

@Component({
  selector: 'card-header',
  template: `
    <mat-card-header>
      <div [ngClass]="avatar" mat-card-avatar></div>
      <mat-card-title>
        <ng-content select="card-header-title"></ng-content>
      </mat-card-title>
      <mat-card-subtitle>
          <ng-content select="card-header-subtitle"></ng-content>
      </mat-card-subtitle>
    </mat-card-header>
  `,
  styleUrls: ['./card-header.scss']
})
export class CardHeaderComponent {
  avatar: string;

  constructor(@Attribute('avatar') avatar: string) {
    this.avatar = avatar; 
  }
}
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