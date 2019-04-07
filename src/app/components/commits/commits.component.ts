import { Component, OnInit, Input } from '@angular/core';
import {Commit} from '@api/commits.api';

@Component({
  selector: 'commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  @Input() 
  commits: Commit[];

  constructor() { }

  ngOnInit() {
  }

}
