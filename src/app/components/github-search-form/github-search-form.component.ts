import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'github-search-form',
  templateUrl: './github-search-form.component.html',
  styleUrls: ['./github-search-form.component.scss']
})
export class GithubSearchFormComponent implements OnInit {

  username = 'yanxch';

  @Output()
  onSubmit = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSearch() {
    this.onSubmit.emit(this.username);
  }
}
