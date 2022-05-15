import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstName = 'John';
  lastName = 'Doe';

  getName() {
    console.log('function called');
    return this.firstName + ' ' + this.lastName;
  }
}
