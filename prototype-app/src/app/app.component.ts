import { Component } from '@angular/core';

import { isStorageAvailable } from 'ngx-webstorage-service';
 
const sessionStorageAvailable = isStorageAvailable(sessionStorage);
 
console.log(`Session storage available: ${sessionStorageAvailable}`);
 
const localStorageAvailable = isStorageAvailable(localStorage);
 
console.log(`Local storage available: ${localStorageAvailable}`);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prototype-app';
}
