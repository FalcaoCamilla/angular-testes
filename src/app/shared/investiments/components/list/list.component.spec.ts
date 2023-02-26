import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) should list all investiments`, () => {
    let investiments = component.investiments;

    expect(investiments.length).toBe(4);
    expect(investiments[3].name).toContain('Inter');
  });

  it(`(I) should list all investiments`, () => {
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.investiments');

    expect(investiments.length).toBe(4);
    expect(investiments[0].textContent).toContain('Itaú');
    expect(investiments[0].textContent).toEqual('Itaú | 100');
  })
});
