import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})

export class CountdownComponent implements OnInit {
    text:any = {
        Year: 'Year',
        Month: 'Month',
        Weeks: "Weeks",
        Days: "Days",
        Hours: "Hours",
        Minutes: "Minutes",
        Seconds: "Seconds",
        MilliSeconds: "MilliSeconds"
      };
  constructor() { }

  ngOnInit() { }

}