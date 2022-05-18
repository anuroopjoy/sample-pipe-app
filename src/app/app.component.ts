import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstName = 'John';
  lastName = 'Doe';

  names: string[] = [];

  getName() {
    console.log('function called');
    return this.firstName + ' ' + this.lastName;
  }

  addName(name: string) {
    // this.names.push(name);
    this.names = [...this.names, name];
  }
}
