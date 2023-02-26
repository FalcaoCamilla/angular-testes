import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ListInvestimentsService } from './list-investiments.service';
import { Investiments } from '../models/investiments';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const url = 'http://localhost:3000/investiments';

  const mockList: Array<Investiments> = [
    {
      name: 'Banco 1',
      value: 100
    },
    {
      name: 'Banco 2',
      value: 100
    },
    {
      name: 'Banco 3',
      value: 100
    },
    {
      name: 'Banco 4',
      value: 100
    },
  ]

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
});
