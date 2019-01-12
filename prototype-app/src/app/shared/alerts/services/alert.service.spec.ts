
////
import { TestBed } from '@angular/core/testing';
import { Router, NavigationStart } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {

 // const routerSpy = jasmine.createSpyObj('Router', ['RouterLinkWithHref']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
    { 
      provide: Router,
      provide: RouterTestingModule.withRoutes([]) }
  ]
  }));


  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});
