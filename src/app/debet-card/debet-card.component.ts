import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

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

  constructor(
    private data:DataService,
    private activatetedRoyte:ActivatedRoute,
    private rest:RestApiService,
    private router:Router,

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
            this.debemienId = this.detCard._id
            )
          : this.router.navigate(['/'])
      }).catch((err) => {
        this.data.error(err['message'])
      });
    })
  }

  fiar(){
    this.fierView = !this.fierView
  }

  pagar(){
    this.pagosView = !this.pagosView
  }

  async fsometerPagos(){
    this.btnDisabled=true
    try {
      const data = await this.rest.post(
        `https://colbook.herokuapp.com/api/debet/${this.debemienId}`,
        {
          dabets: this.fpagosFrom,
          nota: this.fnotaFrom,
        }
      )
      data['success'] 
      ? (
        this.data.success(data['message']),
        this.getProfiel(),
        this.fiar()
    )
      :this.data.error(data['message'])
      
    } catch (error) {
      this.data.error(error['message'])
    }
    this.btnDisabled= false
  }

  async psometerPagos(){
    this.btnDisabled=true
    try {
      const data = await this.rest.post(
        `https://colbook.herokuapp.com/api/debet/${this.debemienId}`,
        {
          pagos: this.ppagosFrom,
          nota: this.pnotaFrom,
        }
      )
      data['success'] 
      data['success'] 
      ? (
        this.data.success(data['message']),
        this.getProfiel(),
        this.pagar()
    )
      :this.data.error(data['message'])
      
    } catch (error) {
      this.data.error(error['message'])
    }
    this.btnDisabled= false
  }


}
