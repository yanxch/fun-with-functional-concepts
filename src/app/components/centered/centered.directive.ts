import {OnInit, Directive} from '@angular/core';

@Directive({
  selector: '[centered]',
  host: {'class': 'centered'}
})
export class CenteredDirective {}