import {Component} from '@angular/core';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  constructor() {
  }

  success() {
    console.log( 'redirect to main page');
  }
}
