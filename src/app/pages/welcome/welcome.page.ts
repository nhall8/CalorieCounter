import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // this method is called when the component is initialized
    // add any initialization logic here
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}

