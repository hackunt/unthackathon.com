import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  StartDate = 'February 6th';
  EndDate = 'February 8th';
  DescriptionText = '1155 Union Circle, Denton, Tx, 76203';
  constructor() { }

  ngOnInit() {}
}
