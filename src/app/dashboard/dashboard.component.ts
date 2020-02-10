import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  toggleButton() {
    const x = document.getElementById('myNavbar');
    if (x.className === 'navbar__contact') {
      x.className += ' responsive';
    } else {
      x.className = 'navbar__contact';
    }
  }
}
