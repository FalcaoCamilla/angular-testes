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
  });

  it(`(U) sacar() must not transfer values other than number (isNaN) or negative values`, () => {
    expect(component.sacar('string')).not.toBeTruthy()
    expect(component.sacar('100')).not.toBeTruthy()
  });


  it(`(U) depositar() must not transfer values other than number (isNaN) or negative values`, () => {
    expect(component.depositar('string')).not.toBeTruthy()
    expect(component.depositar('100')).not.toBeTruthy()
  });

  it(`(I) testing the operation of interface (buttons and inputs)`, () => {
    let element = fixture.debugElement.nativeElement;

    element.querySelector('#depositar-input').value = "10"; //assigning the text input value 10
    element.querySelector('#depositar-btn').click(); //clicking in the button...
    fixture.detectChanges();

    expect(component.obterCarteira()).toEqual(40);
    // expect(component.obterPoupanca()).toEqual(20);

    expect(element.querySelector('#poupanca').textContent).toEqual('20')
  })

});
