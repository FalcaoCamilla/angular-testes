import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ListInvestimentsService } from './list-investiments.service';
import { Investiments } from '../models/investiments';
import { mock_list } from './list-investiments.mock';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const url = 'http://localhost:3000/investiments';

  const mockList: Array<Investiments> = mock_list

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestimentsService);
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`(U) should be list all investiments`, (done) => {
    service.list().subscribe(
      (res: Array<Investiments>) => {
        expect(res[0].name).toEqual('Banco 1');
        expect(res[0].value).toEqual(100);
        done() //works like a break
      }
    );
      const req = httpTestingController.expectOne(url); //expect that a single request has been made which matches the given URL, and return its mock
      req.flush(mockList); //the return of the request must be "mockList"

      expect(req.request.method).toEqual('GET')
  });
});
