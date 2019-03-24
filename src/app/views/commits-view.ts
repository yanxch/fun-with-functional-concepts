import {Component} from '@angular/core';

@Component( {
  selector: 'commits-view',
  templateUrl: 'commits-view.html',
  styleUrls: ['commits-view.scss']
})
export class CommitsView {
 
  username: string;
  
  search($event) {
    this.username = $event;
  }
}