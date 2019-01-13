import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { DataService } from './data.service';

describe('DataService', () => {
  
  let service: DataService;
  let backend: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DataService]

  }));

  beforeEach(() => {
    service = TestBed.get(DataService);
    backend = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


 describe('requests', () => {

   const url: string = `https://rails-rest.herokuapp.com/posts`;
   const params: string = 'page=1';

    it('should expectOne url', () => {
      service.get(url).subscribe();
      backend.expectOne(url);
      backend.verify();
    });

    it('should expectOne url and method', () => {
      service.get(url).subscribe();
      backend.expectOne({url: url});
      service.get(url).subscribe();
      backend.expectOne({url: url, method: 'GET'});
      backend.verify();
    });

it('should not expect one when not subscribed', () => {
      service.get(url);// .subscribe();
      backend.expectNone(url);
      backend.verify();
    });

    it('should not expect two', () => {
      service.get(url).subscribe();
      backend.expectOne(url);
      backend.expectNone(url);
      backend.verify();
    });

it('should expectOne request', () => {
      service.get(url).subscribe();
      backend.expectOne((request: HttpRequest<any>) => {
        return request.url.match(/posts/) &&
              request.method === 'GET';
      });
      backend.verify();
    });

    it('should expectOne request different style (using TestRequest)', () => {
      service.get(url).subscribe();
      const call: TestRequest = backend.expectOne(url);
      expect(call.request.method).toEqual('GET');
      backend.verify();
    });

    it('should match', () => {
      service.get(url).subscribe();
      backend.match((request) => {
        return request.url.match(/posts/) &&
               request.method === 'GET';
      });
      backend.verify();
    });

    it('should match two requests', () => {
      service.get(url).subscribe();
      service.get(url, params).subscribe();
      backend.match((request) => {
        return request.url.match(/posts/) &&
              request.method === 'GET';
      });
      backend.verify();
    });

    it('should match two requests', () => {
      service.get(url).subscribe();
      service.get(url, params).subscribe();
      const calls = backend.match((request) => {
        return request.url.match(/posts/) &&
               request.method === 'GET';
      });
      expect(calls.length).toEqual(2);
      expect(calls[0].request.url).toEqual(url);
      expect(calls[1].request.url).toEqual(`https://rails-rest.herokuapp.com/posts?page=1`);
      backend.verify();
    });

    it('should match different requests', () => {
      service.get(url).subscribe();
      /*service.get(url, '1').subscribe();
      const otherCalls = backend.match((request) => {
        return request.url == url &&
               request.method === 'GET';
      });*/
      const calls = backend.match((request) => {
        return request.url == url &&
               request.method === 'GET';
      });
      expect(calls.length).toEqual(1);
      //expect(otherCalls.length).toEqual(1);
      expect(calls[0].request.url).toEqual(url);
     // expect(otherCalls[0].request.url).toEqual(url);
      backend.verify();
    });

    /*it('should have url and urlWithParams', () => {
      service.get(url, params).subscribe();
      const calls = backend.match((request) => {
        return request.url == url &&
               request.urlWithParams == url + '?' + params &&
               request.method === 'GET';
      });
      backend.expectNone(url); // If url with params, use `.match`
      backend.verify();
    });

    it('should have a few more attributes on request that are useful', () => {
      service.get(url, 'page=1').subscribe();
      const calls = backend.match((request: HttpRequest<any>) => {
        return request.url == url &&
               request.urlWithParams == url + '?' + params &&
               request.method === 'GET' &&
               request.params.get('page') == '1' &&
               request.body == null &&
               request.headers instanceof HttpHeaders &&
               request.responseType == 'json' &&
               request.withCredentials == false;
      });
      backend.expectNone(`https://rails-rest.herokuapp.com/posts`); // If url with params, use `.match`
      backend.verify();
    });*/


 });

/*
it(
    'should get',
    inject(
      [HttpTestingController, DataService],
      (
        httpMock: HttpTestingController,
        dataService: DataService
      ) => {
        // ...our test logic here
        dataService.get('http://.../data/contacts', '');
// We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://.../data/contacts');
      expect(req.request.method).toEqual('GET');

      }
    )
  );
*/
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

});
