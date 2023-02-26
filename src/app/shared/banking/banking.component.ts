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

  sacar(value: string): number | undefined{
    const valorSaque = Number(value);
    if(isNaN(valorSaque) || this.poupanca < valorSaque){
      return //if the value is a string, a break will be given
    }
    this.poupanca -= valorSaque;
    return (this.carteira += valorSaque);
  }

  depositar(value: string): number | undefined{
    const valorDeposito = Number(value);
    if(isNaN(valorDeposito) || this.carteira < valorDeposito){
      return //if the value is a string, a break will be given
    }
    this.carteira -= valorDeposito;
    return (this.poupanca += valorDeposito)
  }

}
