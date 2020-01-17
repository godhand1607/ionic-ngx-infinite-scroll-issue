import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    items = ['Foo', 'Bar', 'Fooooo', 'Baaaaaar', 'Whatttt'];
    constructor() {}


    pageItems() {

    }
}
