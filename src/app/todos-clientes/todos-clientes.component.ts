import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-todos-clientes',
  templateUrl: './todos-clientes.component.html',
  styleUrls: ['./todos-clientes.component.scss']
})
export class TodosClientesComponent implements OnInit {

  allClientes:any


 

  constructor(
    private data: DataService,
    private rest: RestApiService
  ) { }

  ngOnInit() {
    this.getAllCliente()
  }



  async getAllCliente(){
    try {
      const data = await this.rest.get(
        `http://127.0.0.1:3030/api/cliente/todos`
      )
      data['success']
        ? (this.allClientes = data['data'])
        : this.data.error('Could not ferch allClientes..')
    } catch (error) {
      this.data.error(error['message'])
    }
  }
  
}
