import { Component } from '@angular/core';
import { MockDB } from './mockDB/mockDB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookbook';

  constructor(private database: MockDB) {
    this.database.setupDB();
  }
}
