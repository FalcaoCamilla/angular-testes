import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  private poupanca: number = 10;
  private carteira: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  obterPoupanca(): number{
    return this.poupanca;
  }

  obterCarteira(): number{
    return this.carteira;
  }

  sacar(value: string): number{
    const valorSaque = Number(value);
    return valorSaque;
  }

  depositar(value: string): number{
    const valorDeposito = Number(value);
    return valorDeposito
  }

}
