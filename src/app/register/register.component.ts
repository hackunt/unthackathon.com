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
    // remove footer because it isn't necessary here, and it makes the typeform work better.
    let footer = document.getElementsByTagName('app-footer')[0];
    footer.parentNode.removeChild(footer);

    // calculate the height of the form
    let form = document.getElementById('typeframe');
    let height = window.innerHeight - 100;
    form.style.height = height + 'px';
  }
}
