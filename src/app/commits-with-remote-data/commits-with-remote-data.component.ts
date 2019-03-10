import { Component, OnInit } from '@angular/core';
import {readCommitsByUsername, Commit} from 'src/api/commits.api';

@Component({
  selector: 'commits-with-remote-data',
  templateUrl: './commits-with-remote-data.component.html',
  styleUrls: ['./commits-with-remote-data.component.scss']
})
export class CommitsWithRemoteDataComponent implements OnInit {

  username = 'yanxch';

  data: Promise<Commit[]>;
  
  constructor() { }

  ngOnInit() {}

  onSearch() {
    this.data = readCommitsByUsername(this.username);
    console.log('Clicked Search');
  }
}
