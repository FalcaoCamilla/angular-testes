import { Component, OnInit } from '@angular/core';

//Model
import { Investiments } from '../../models/investiments';

//Service
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [
    {
      name: "Itaú",
      value: 100
    },
    {
      name: "Banco do Brasil",
      value: 100,
    },
    {
      name: "Nubank",
      value: 100,
    },
    {
      name: "Inter",
      value: 100,
    }
  ]

  constructor(private ListInvestimentsService: ListInvestimentsService) { }

  ngOnInit(): void {
    this.ListInvestimentsService.list().subscribe(
      (dados) => {
        console.log(dados)
      }
    )
  }

}
