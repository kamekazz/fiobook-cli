import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cli-serg',
  templateUrl: './cli-serg.component.html',
  styleUrls: ['./cli-serg.component.scss']
})
export class CliSergComponent implements OnInit {

  btnDisable= false
  serchForm:any
  resultOfSerch:any
  resultOfSerchApodo:any


  constructor(
    private data:DataService,
    private rest:RestApiService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  async onSerchClient(){
    this.btnDisable = true
    try {
      const data = await this.rest.get(
        `https://colbook.herokuapp.com/api/cliente?search=${this.serchForm}`
      )
      data['success']
        ? (this.resultOfSerch = data['clientesQuerryApodo'],this.resultOfSerchApodo = data['clientesQuerryName'] )
        : this.data.error('Could not ferch allClientes..')
    } catch (error) {
      this.data.error('Por favor verifica la conexion a internet')
    }

  }
}
