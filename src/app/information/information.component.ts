import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  StartDate = 'February 15th';
  EndDate = 'February 16th';
  Location = 'UNT Discovery Park';
  Addr = '3940 N Elm St, Denton, TX, 76207';
  constructor() { }

  ngOnInit() {
  }

}
