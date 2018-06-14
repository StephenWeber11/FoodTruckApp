import { Component } from '@angular/core';

/**
 * Generated class for the TrucklistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trucklist',
  templateUrl: 'trucklist.html'
})
export class TruckList {

  text: string;

  constructor() {
    console.log('Hello TrucklistComponent Component');
    this.text = 'Hello World';
  }

}
