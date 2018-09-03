import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../data.service';
import { RestApiService } from '../../rest-api.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  debemienId: any;
  ppagosFrom: any;
  pnotaFrom: any;
  newTotal:any;
  dabetTotal: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private passData:any,
    private data:DataService,
    private rest:RestApiService,
  ) { }

  ngOnInit() {
    this.debemienId = this.passData.id
    this.dabetTotal = this.passData.dabetTotal
  }

  async psometerPagos(){
    if (this.verifyDvsP()) {
      try {
        const data = await this.rest.post(
          `https://colbook.herokuapp.com/api/debet/tajadeforo/${this.debemienId}`,
          {
            pagos: this.ppagosFrom,
            nota: this.pnotaFrom,
            newTotal: this.newTotal,
          }
        )
  
        data['success'] 
        ? (
          this.data.success(data['message'])
      
  
      )
        :this.data.error(data['message'])
        
      } catch (error) {
        this.data.error('Por favor verifica la conexion a internet')
      }
    } else{
      this.data.error('Sepaso te de su pago total. porfavor trate de nuevo ')
    }

  }

  verifyDvsP(){
    if (this.dabetTotal >= this.ppagosFrom ) {
      this.claculateNewTotal()
      return true
    }
  }

  claculateNewTotal(){
    this.newTotal = this.dabetTotal - this.ppagosFrom
  }
}
