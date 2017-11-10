import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  StartDate = 'February 6th';
  EndDate = 'February 8th';
  RegisterLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfT839wnBDBDl_vPTKDIaAqR73dRQgf-p1Fo5lLemFRj8pD1g/viewform?usp=sf_link';
  DescriptionText = '-----------------    Styling Required    -----------------';
  constructor() { }

  ngOnInit() {}
}
