import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListComponent } from './list.component';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { mock_list } from '../../services/list-investiments.mock';
import { Investiments } from '../../models/investiments';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;

  const mockList: Array<Investiments> = mock_list;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ //configuration module
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Access the component instance through the fixture and confirm it exists with a Jasmine expectation

  it('should create', () => {
    expect(component).toBeTruthy(); //check if the value, when cast to a boolean, will be a truthy value
  });

  it(`(U) should list all investiments`, () => {
    spyOn(service, 'list').and.returnValue(of(mockList)) //serves as an observer of the service (method list())

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toBe(4);
    expect(component.investiments[3].name).toEqual('Banco 4');
    expect(component.investiments[2].value).toBe(100)
  });

  it(`(I) should list all investiments`, () => {
    spyOn(service, 'list').and.returnValue(of(mockList)); //exchange the values ​​of db.json for the mock

    component.ngOnInit();
    fixture.detectChanges();

    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.investiments'); //HTMLElement = fixture.nativeElement;

    expect(investiments.length).toBe(4); //===
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 | 100'); //trim method removes spaces around
  })
});
