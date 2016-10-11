import { Component } from '@angular/core';

/*
  Generated class for the Hello component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'hello',
  templateUrl: 'build/components/hello/hello.html'
})
export class Hello {
  constructor() {
    this.text = 'Hello World';
  }
}
