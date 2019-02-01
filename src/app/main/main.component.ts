import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  StartDate = 'APRIL 6TH';
  EndDate = 'APRIL 7TH';
  constructor() { }

  ngOnInit() {}
}
