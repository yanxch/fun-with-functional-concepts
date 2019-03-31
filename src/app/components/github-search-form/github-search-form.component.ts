import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'github-search-form',
  templateUrl: './github-search-form.component.html',
  styleUrls: ['./github-search-form.component.scss']
})
export class GithubSearchFormComponent implements OnInit {

  @Input()
  username: string;

  @Output()
  onSubmit = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSearch() {
    this.onSubmit.emit(this.username);
  }
}
