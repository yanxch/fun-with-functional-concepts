import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'having-fun-with-functional-concepts';

  data = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 1000);
  });
}
