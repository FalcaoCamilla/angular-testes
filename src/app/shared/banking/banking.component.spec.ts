import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); //the "beforeEach" is called before the "its" functions

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) obterPoupanca() must have $10', () => {
    expect(component.obterPoupanca()).toEqual(10)
  });

  it(`(U) sacar() should transfer from "poupanca" to "carteira"`, () => {
    component.sacar('10');
    fixture.detectChanges();

    expect(component.obterPoupanca()).toEqual(0);
    expect(component.obterCarteira()).toEqual(60);
  });

  it(`(U) depositar() should transfer from "carteira" to "poupanca"`, () => {
    component.depositar('10');
    fixture.detectChanges();

    expect(component.obterPoupanca()).toEqual(20);
    expect(component.obterCarteira()).toEqual(40);
  })

});
