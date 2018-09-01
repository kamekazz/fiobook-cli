import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { MatDialog,MatPaginator } from '@angular/material';
import { FioComponent } from './fio/fio.component';
import { PagosComponent } from './pagos/pagos.component';
import { EditMaxCreditComponent } from './edit-max-credit/edit-max-credit.component';

@Component({
  selector: 'app-debet-card',
  templateUrl: './debet-card.component.html',
  styleUrls: ['./debet-card.component.scss']
})
export class DebetCardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;



  red = 'red'
  green= 'green'
  pagosArry
  detCard:any
  pagoTotal:any
  dabetTotal:any
  fierView = false
  pagosView = false
  debemienId:any
  btnDisabled= false
  limiteDesponible:any
  // form//////////
  fnotaFrom
  fpagosFrom
  pnotaFrom
  ppagosFrom
  
  //segupa data

  //probar
  colorTotal
  porsiento
  fioArry: any;
  dataSource
  dataSource1: any;
  //tabel

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
            this.fioArry = this.detCard.dabets,
            this.debemienId = this.detCard._id,
            this.totalDeBarCal(),
            this.readryTable()

            )
          : this.router.navigate(['/'])
      }).catch((err) => {
        this.data.error('Por favor verifica la conexion a internet')
      });
    })
  }

  fiar(){
    this.limiteDisponibleCal()
    const dialogRes = this.dialog.open(FioComponent,{
      data:{
        id: this.debemienId,
        totalCadit: this.limiteDesponible
      }
    })
    dialogRes.afterClosed().subscribe(result =>{
      this.getProfiel()
    })
    this.data.error('')
  }



  pagar(){
    const dialogRes = this.dialog.open(PagosComponent,{
      data:{
        id: this.debemienId
      }
    })
    dialogRes.afterClosed().subscribe(result =>{
      this.getProfiel()
    })
    this.data.error('')
  }


//calculadora

  limiteDisponibleCal(){
    this.limiteDesponible = this.detCard.capmax - this.detCard.total
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

///table
  readryTable(){
    this.dataSource = this.fioArry
    this.dataSource1 = this.pagosArry

  }
  displayedColumns: string[] = ['cantida', 'created', 'nota']


  ////Edit debet card popup
  editBoton(){
    const dialogRes = this.dialog.open(EditMaxCreditComponent,{
      data:{
        id: this.debemienId,
        totalCadit: this.detCard.capmax
      }
    })
    dialogRes.afterClosed().subscribe(result =>{
      this.getProfiel()
    })
    this.data.error('')
  }





}
