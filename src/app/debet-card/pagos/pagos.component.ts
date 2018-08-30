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

  constructor(
    @Inject(MAT_DIALOG_DATA) private passData:any,
    private data:DataService,
    private rest:RestApiService,
  ) { }

  ngOnInit() {
    this.debemienId = this.passData.id
  }

  async psometerPagos(){

    try {
      const data = await this.rest.post(
        `https://colbook.herokuapp.com/api/debet/${this.debemienId}`,
        {
          pagos: this.ppagosFrom,
          nota: this.pnotaFrom,
        }
      )

      data['success'] 
      ? (
        this.data.success(data['message'])
    

    )
      :this.data.error(data['message'])
      
    } catch (error) {
      this.data.error(error['message'])
    }

  }

}
