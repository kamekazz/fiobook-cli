import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-miss-cliente',
  templateUrl: './miss-cliente.component.html',
  styleUrls: ['./miss-cliente.component.scss']
})
export class MissClienteComponent implements OnInit {

  allClientes2= []
  


 

  constructor(
    private data: DataService,
    private rest: RestApiService
  ) { }

  ngOnInit() {
    this.getmisCliente()
  }



  async getmisCliente(){
    try {
      const data = await this.rest.get(
        `http://127.0.0.1:3030/api/debet/`
      )
      data['success']
        ? (this.allClientes2 = data['data'])
        : this.data.error('Could not ferch allClientes..')
    } catch (error) {
      this.data.error(error['message'])
    }
  }
}
