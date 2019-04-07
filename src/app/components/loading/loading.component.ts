import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {

  @Input()
  isLoading = false;

  constructor() {
    console.log('init loading');
   }

   ngOnInit() {
     console.log('oninit loading');
   }
}
