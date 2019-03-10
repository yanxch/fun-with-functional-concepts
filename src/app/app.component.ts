import { Component } from '@angular/core';
import {readCommitsByUsername, Commit} from 'src/api/commits.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'having-fun-with-functional-concepts';
}
