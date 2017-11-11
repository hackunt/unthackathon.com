import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Properties

  constructor() {
    
  }

  ngOnInit() {
    // embed typeform in page
    console.log('elem: ' + document.getElementById('typeform'));
  }

}
