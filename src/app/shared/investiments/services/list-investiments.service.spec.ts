import { TestBed } from '@angular/core/testing';

import { ListInvestimentsService } from './list-investiments.service';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInvestimentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
