import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../data.service';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-edit-max-credit',
  templateUrl: './edit-max-credit.component.html',
  styleUrls: ['./edit-max-credit.component.scss']
})
export class EditMaxCreditComponent implements OnInit {
  debemienId: any;
  maxCapFrom: any;
  totalCredito: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private passData:any,
    private data:DataService,
    private rest:RestApiService,
  ) { }

  ngOnInit() {
    this.debemienId = this.passData.id
    this.totalCredito = this.passData.totalCadit
  }

  async cambiarMax(){
    try {
      const data = await this.rest.post(
        `https://colbook.herokuapp.com/api/debet/edit/${this.debemienId}`,
        {
          capmax: this.maxCapFrom
        }
      )
      if (data['success']) {
        this.data.success('Nuevo Limite de Credito ')
      } else {
        this.data.error(data['message'])
      }
    } catch (error) {
      this.data.error(error['message'])
    }
  }

}
