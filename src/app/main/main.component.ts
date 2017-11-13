import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  StartDate = 'FEBRUARY 9TH';
  EndDate = 'FEBRUARY 11TH';
  constructor() { }

  ngOnInit() {}
}
