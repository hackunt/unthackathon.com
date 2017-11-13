import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  SatEvents = [
    {
      EventTitle: 'Event Title 1',
      Location: '555 Filler Street, Denton, Texas',
      gmapLink: '',
      Date: 'DayExpanded, MM DD',
      StartTime: 'hh:mm am/pm',
      EndTime: 'hh:mm am/pm',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a orci ac lorem euismod gravida.',
      URL: 'https://reddit.com/r/unt',
    },
    {
      EventTitle: 'Event Title 2',
      Location: '555 Filler Street, Denton, Texas',
      gmapLink: '',
      Date: 'DayExpanded, MM DD',
      StartTime: 'hh:mm am/pm',
      EndTime: 'hh:mm am/pm',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a orci ac lorem euismod gravida.',
      URL: 'https://reddit.com/r/unt',
    },
    {
      EventTitle: 'Event Title 3',
      Location: '555 Filler Street, Denton, Texas',
      gmapLink: '',
      Date: 'DayExpanded, MM DD',
      StartTime: 'hh:mm am/pm',
      EndTime: 'hh:mm am/pm',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a orci ac lorem euismod gravida.',
      URL: 'https://reddit.com/r/unt',
    },
    {
      EventTitle: 'Event Title 4',
      Location: '555 Filler Street, Denton, Texas',
      gmapLink: '',
      Date: 'DayExpanded, MM DD',
      StartTime: 'hh:mm am/pm',
      EndTime: 'hh:mm am/pm',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a orci ac lorem euismod gravida.',
      URL: 'https://reddit.com/r/unt',
    },
    {
      EventTitle: 'Event Title 5',
      Location: '555 Filler Street, Denton, Texas',
      gmapLink: '',
      Date: 'DayExpanded, MM DD',
      StartTime: 'hh:mm am/pm',
      EndTime: 'hh:mm am/pm',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a orci ac lorem euismod gravida.',
      URL: 'https://reddit.com/r/unt',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
