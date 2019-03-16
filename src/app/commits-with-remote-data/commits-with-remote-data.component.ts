import {Component, OnInit} from '@angular/core';
import {Commit, readCommitsByUsername} from 'src/api/commits.api';

@Component({
  selector: 'commits-with-remote-data',
  templateUrl: './commits-with-remote-data.component.html',
  styleUrls: ['./commits-with-remote-data.component.scss']
})
export class CommitsWithRemoteDataComponent implements OnInit {

  username = 'yanxch';

  commits: Promise<Commit[]>;
  
  constructor() { }

  ngOnInit() {}

  onSearch() {
    this.commits = readCommitsByUsername(this.username);
    console.log('Clicked Search');
  }
}
