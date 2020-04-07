import { Component, OnInit } from '@angular/core';
import { MockDB } from '../mockDB/mockDB';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(database: MockDB) {}

  ngOnInit() {
  }

}
