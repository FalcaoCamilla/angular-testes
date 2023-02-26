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

  public investiments!: Array<Investiments> ;

  constructor(private ListInvestimentsService: ListInvestimentsService) { }

  ngOnInit(): void {
    this.obterInvestimentos();
  }

  obterInvestimentos(){
    this.ListInvestimentsService.list().subscribe(
      (dados) => {
        this.investiments = dados;
      }
    )
  }

}
