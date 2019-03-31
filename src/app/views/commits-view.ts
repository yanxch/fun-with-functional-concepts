import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component( {
  selector: 'commits-view',
  templateUrl: 'commits-view.html',
  styleUrls: ['commits-view.scss']
})
export class CommitsView {
 
  username$: Observable<string>;

  constructor(private router: Router,
              private route: ActivatedRoute) {
    this.username$ = this.route.params.pipe(map(params => params['usernameParam']));
  }

  search(username: string) {
    this.router.navigate(['commits', username]);
  }
}