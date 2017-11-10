import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tartDate = 'February 6th';
  EndDate = 'February 8th';
  RegisterLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfT839wnBDBDl_vPTKDIaAqR73dRQgf-p1Fo5lLemFRj8pD1g/viewform?usp=sf_link';
  DescriptionText = 'Lorem ipsum dolor sit amet, Vestibulum ut lacus a tellus convallis porta ut eu neque.';
  constructor() { }

  ngOnInit() {}
}
