import { Component, OnInit, Inject,Output,EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../data.service';
import { RestApiService } from '../../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fio',
  templateUrl: './fio.component.html',
  styleUrls: ['./fio.component.scss']
})
export class FioComponent implements OnInit {
  @Output() refreechProfial = new EventEmitter<any>()
  btnDisabled: boolean;
  fpagosFrom: any;
  fnotaFrom: any;
  debemienId: any;
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

  async fsometerPagos(){
    if (this.verificarLimite()) {
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
            this.refreechProfial.emit()

        )
          :this.data.error(data['message'])
      
      } catch (error) {
        this.data.error(error['message'])
      }
    } else {
      this.data.error('Exsidio el limite de Credito')
    }

  }

  verificarLimite(){
    if (this.totalCredito >= this.fpagosFrom ) {
      return true
    }
  }


}
