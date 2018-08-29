import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { MatDialog } from '@angular/material';
import { FioComponent } from '../fio/fio.component';
import { PagosComponent } from '../pagos/pagos.component';

@Component({
  selector: 'app-debet-card',
  templateUrl: './debet-card.component.html',
  styleUrls: ['./debet-card.component.scss']
})
export class DebetCardComponent implements OnInit {
  pagosArry
  detCard:any
  pagoTotal:any
  dabetTotal:any
  fierView = false
  pagosView = false
  debemienId:any
  btnDisabled= false
  // form//////////
  fnotaFrom
  fpagosFrom
  pnotaFrom
  ppagosFrom

  //segupa data

  //probar
  colorTotal
  porsiento

  constructor(
    private data:DataService,
    private activatetedRoyte:ActivatedRoute,
    private rest:RestApiService,
    private router:Router,
    private dialog: MatDialog

  ) { }

  ngOnInit() {
    this.getProfiel()
  }

  getProfiel(){
    this.activatetedRoyte.params.subscribe(res =>{
      this.rest.get(`https://colbook.herokuapp.com/api/debet/${res['id']}`)
      .then((data) => {
        data['success']
          ? (this.detCard = data['data'],
             this.pagoTotal = data['pagoTotal'],
            this.dabetTotal = data['dabetTotal'],
            this.pagosArry = this.detCard.pagos,
            this.debemienId = this.detCard._id,
            this.totalDeBarCal()
            )
          : this.router.navigate(['/'])
      }).catch((err) => {
        this.data.error(err['message'])
      });
    })
  }

  fiar(){
    this.dialog.open(FioComponent,{
      data:{
        id: this.debemienId
      }
    })
  }

  pagar(){
    this.dialog.open(PagosComponent,{
      data:{
        id: this.debemienId
      }
    })
  }



  totalDeBarCal(){
    this.porsiento = this.detCard.total / this.detCard.capmax
    this.porsiento = 100 * this.porsiento
    this.colorCal()
  }

  colorCal(){
    if (this.porsiento > 61) {
      this.colorTotal = 'accent'
    }
    if (this.porsiento > 81 ) {
      this.colorTotal = 'warn'
    }
  
  }

}
